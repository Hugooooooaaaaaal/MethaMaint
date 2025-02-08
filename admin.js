import admin from "firebase-admin";
import { faker } from "@faker-js/faker"; // faker en ESM
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";
import { collection, getDocs, doc, setDoc, addDoc } from "firebase/firestore";

const serviceAccount = JSON.parse(
  readFileSync("./service-account.json", "utf8")
);

const app = initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore(app);
db.settings({ ignoreUndefinedProperties: true });
//DATA
let nb_interventions = 100;
let nb_gammes = 15;

const db_installations = [
  {
    REFERENCE: "0001",
    CODE: "0001",
    NOM: "Villedieu",
    DESCRIPTION: "Site de production principal",
  },

  // Prétraitement
  {
    REFERENCE: "30",
    CODE: "0001-0030",
    NOM: "Prétraitement",
    DESCRIPTION: "Première étape de transformation des déchets",
  },
  {
    REFERENCE: "301",
    CODE: "0001-0030-0301",
    NOM: "Trémie d'alimentation",
    DESCRIPTION: "Réception et stockage temporaire des déchets entrants",
  },
  {
    REFERENCE: "302",
    CODE: "0001-0030-0302",
    NOM: "Déchiqueteur industriel",
    DESCRIPTION: "Broie les déchets en petits morceaux",
  },
  {
    REFERENCE: "303",
    CODE: "0001-0030-0303",
    NOM: "Convoyeur de transfert",
    DESCRIPTION: "Transporte les déchets broyés vers la séparation",
  },

  // Séparation des matériaux
  {
    REFERENCE: "40",
    CODE: "0001-0040",
    NOM: "Séparation des matériaux",
    DESCRIPTION: "Tri des différents types de matériaux",
  },
  {
    REFERENCE: "401",
    CODE: "0001-0040-0401",
    NOM: "Séparateur magnétique",
    DESCRIPTION: "Sépare les métaux ferreux des autres déchets",
  },
  {
    REFERENCE: "402",
    CODE: "0001-0040-0402",
    NOM: "Séparateur à air",
    DESCRIPTION: "Sépare les matières légères par flux d'air",
  },
  {
    REFERENCE: "403",
    CODE: "0001-0040-0403",
    NOM: "Table vibrante",
    DESCRIPTION: "Classe les déchets selon leur densité",
  },

  // Broyeur final
  {
    REFERENCE: "50",
    CODE: "0001-0050",
    NOM: "Broyeur final",
    DESCRIPTION: "Réduction finale des déchets",
  },
  {
    REFERENCE: "501",
    CODE: "0001-0050-0501",
    NOM: "Broyeur à marteaux",
    DESCRIPTION: "Réduit la taille des matériaux",
  },
  {
    REFERENCE: "502",
    CODE: "0001-0050-0502",
    NOM: "Système de refroidissement",
    DESCRIPTION: "Évite la surchauffe du broyeur",
  },
  {
    REFERENCE: "503",
    CODE: "0001-0050-0503",
    NOM: "Filtre à particules",
    DESCRIPTION: "Capture les fines poussières générées",
  },

  // Stockage et expédition
  {
    REFERENCE: "60",
    CODE: "0001-0060",
    NOM: "Stockage et expédition",
    DESCRIPTION: "Stockage des matériaux triés",
  },
  {
    REFERENCE: "601",
    CODE: "0001-0060-0601",
    NOM: "Silos de stockage",
    DESCRIPTION: "Stockage temporaire avant expédition",
  },
  {
    REFERENCE: "602",
    CODE: "0001-0060-0602",
    NOM: "Station de chargement",
    DESCRIPTION: "Chargement des camions pour expédition",
  },

  // Équipements spécifiques (sous-composants)
  {
    REFERENCE: "M-30101",
    CODE: "0001-0030-0301-0001",
    NOM: "Moteur du déchiqueteur",
    DESCRIPTION: "Fournit la puissance pour le broyage",
  },
  {
    REFERENCE: "C-30302",
    CODE: "0001-0030-0303-0002",
    NOM: "Convoyeur de sortie",
    DESCRIPTION: "Évacue les déchets broyés",
  },
  {
    REFERENCE: "S-40201",
    CODE: "0001-0040-0402-0001",
    NOM: "Ventilateur haute pression",
    DESCRIPTION: "Assure le flux d’air pour la séparation",
  },
  {
    REFERENCE: "B-50101",
    CODE: "0001-0050-0501-0001",
    NOM: "Lames du broyeur",
    DESCRIPTION: "Coupe et réduit les déchets",
  },
  {
    REFERENCE: "T-60201",
    CODE: "0001-0060-0602-0001",
    NOM: "Borne de pesée",
    DESCRIPTION: "Contrôle le poids avant expédition",
  },
];
const db_nature = [
  "Dépannage",
  "Préventif",
  "Suite Préventif",
  "Amélioration/Modification",
  "Prédictif",
];

const db_priorite = [
  "P1-Urgent",
  "P2-Dans la semaine",
  "P3-Dans le mois",
  "P4-Dans les 3 mois",
  "P5-Dans les 6 mois",
];

const db_cause = [
  "Opérationnelle",
  "Mécanique",
  "Electrique",
  "Automatisme",
  "Instruments",
];
const db_statut = [
  "En Préparation",
  "En Attente Réalisation",
  "En Cours",
  "Terminée",
  "Annulée",
];

let installationIds = [];
let installation_libelles = [];
let interventionIds = [];
let gammeIds = [];

//SUPPRESSION
async function deleteAllDocuments(collectionName) {
  const snapshot = await db.collection(collectionName).get(); // Récupérer tous les documents
  const batch = db.batch(); // Utilisation d'un batch pour optimiser

  snapshot.forEach((doc) => {
    batch.delete(doc.ref); // Supprimer chaque document
  });

  await batch.commit(); // Appliquer les suppressions
  console.log(`Tous les documents de "${collectionName}" ont été supprimés.`);
}

//RECUPERATION IDs
async function getAllIDs(collectionName) {
  let items = [];
  const snapshot = await db.collection(collectionName).get(); // Récupérer tous les documents

  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() }); // Supprimer chaque document
  });
  return items;
}

//CREATION
async function generateInstallations() {
  console.log("Installations : ");

  for (const installation of db_installations) {
    try {
      //   const docRef = await addDoc(collection(db, "installations"),
      db.collection("installations").add({
        libelle: installation.REFERENCE + "_" + installation.NOM,
        reference: installation.REFERENCE,
        code: installation.CODE,
        nom: installation.NOM,
        description: installation.DESCRIPTION,
        date_ajout: faker.date.recent({ days: 30 }), // Date aléatoire récente
      });
    } catch (error) {
      console.error(
        `❌ Erreur lors de l'ajout de "${installation.NOM}"`,
        error
      );
      console.error(`🔍 Détails de l'erreur: ${error.stack}`);
      process.exit(1);
    }
  }

  console.log("Installations ajoutées avec succès !");
  console.log("IDs des documents créés :", installationIds);
}

async function generateInterventions() {
  console.log("Interventions : ");
  let installations_items = await getAllIDs("installations");
  let gammes_items = await getAllIDs("gammes");

  for (let i = 0; i < nb_interventions; i++) {
    try {
      let item = faker.helpers.arrayElement(installations_items);
      let item_gamme = faker.helpers.arrayElement(gammes_items);
      console.log("Item sélectionné :", item);
      console.log("Item_Gamme sélectionné :", item_gamme);
      db.collection("interventions").add({
        num_intervention: faker.number.int({ min: 10000, max: 99999 }),
        titre: faker.hacker.phrase(),
        statut: faker.helpers.arrayElement(db_statut),
        date: faker.date.recent({ days: 30 }),
        installation: {
          id: item.id,
          reference: item.reference ?? "000",
          code: item.code,
          nom: item.nom,
        },
        nature: faker.helpers.arrayElement(db_nature),
        priorite: faker.helpers.arrayElement(db_priorite),
        cause: faker.helpers.arrayElement(db_cause),
        details: faker.lorem.sentence(),
        temps_intervention: faker.number.int({ min: 10, max: 480 }),
        gamme: db.doc(`/gammes/${item_gamme.id}`),
      });
    } catch (error) {
      console.error(`❌ Erreur lors de l'ajout `, error);
      console.error(`🔍 Détails de l'erreur: ${error.stack}`);
      process.exit(1);
    }
  }

  console.log("Interventions ajoutées avec succès !");
}

async function generateGammes() {
  console.log("Gammes : ");
  let installations_items = await getAllIDs("installations");

  for (let i = 0; i < nb_gammes; i++) {
    try {
      let item = faker.helpers.arrayElement(installations_items);
      console.log("Item sélectionné :", item);
      await db.collection("gammes").add({
        num_gamme: faker.number.int({ min: 10000, max: 99999 }),
        titre: faker.hacker.phrase(),
        statut: faker.helpers.arrayElement(db_statut),
        date: faker.date.recent({ days: 30 }),
        installation: {
          id: item.id,
          reference: item.reference ?? "000",
          code: item.code,
          nom: item.nom,
        },
        nature: faker.helpers.arrayElement(db_nature),
        priorite: faker.helpers.arrayElement(db_priorite),
        cause: faker.helpers.arrayElement(db_cause),
        details: faker.lorem.sentence(),
        temps_intervention: faker.number.int({ min: 10, max: 480 }),
        date_debut: faker.date.recent({ days: 30 }),
        date_fin: faker.date.recent({ days: 30 }),
        periodicite: faker.number.int({ min: 1, max: 1000 }),
      });
    } catch (error) {
      console.error(`❌ Erreur lors de l'ajout `, error);
      console.error(`🔍 Détails de l'erreur: ${error.stack}`);
      process.exit(1);
    }
  }

  console.log("Gammes ajoutées avec succès !");
}

//GLOBAL
function delete_all() {
  deleteAllDocuments("installations");
  deleteAllDocuments("interventions");
  deleteAllDocuments("gammes");
}

async function create_all() {
  await generateInstallations();
  await generateGammes();
  await generateInterventions();
}

function main() {
  // delete_all();
  create_all();
}

main();
