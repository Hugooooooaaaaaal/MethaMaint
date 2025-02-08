<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { db } from "../firebase.config.js";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

const items = ref([]);

const filters_interventions = reactive({
  INTERVENTION: "",
  TITRE: "",
  STATUT: "",
  DATE_MIN: "",
  DATE_MAX: "",
  MACHINE: "",
  NATURE: "",
  PRIORITE: "",
  CAUSE: "",
});

async function fetchInterventions() {
  let q = query(collection(db, "interventions"));
  let machineIds = [];

  console.log("filters_interventions", filters_interventions);

  // Appliquer les filtres
  if (filters_interventions.INTERVENTION) {
    q = query(
      q,
      where("num_intervention", "==", filters_interventions.INTERVENTION)
    );
  }
  if (filters_interventions.MACHINE) {
    q = query(
      q,
      where("installation.code", ">=", filters_interventions.MACHINE),
      where("installation.code", "<", filters_interventions.MACHINE + "\uf8ff")
    );
  }
  if (filters_interventions.TITRE) {
    q = query(
      q,
      where("titre", ">=", filters_interventions.TITRE),
      where("titre", "<", filters_interventions.TITRE + "\uf8ff")
    );
  }
  if (filters_interventions.STATUT) {
    q = query(q, where("statut", "==", filters_interventions.STATUT));
  }
  if (filters_interventions.NATURE) {
    q = query(q, where("nature", "==", filters_interventions.NATURE));
  }
  if (filters_interventions.PRIORITE) {
    q = query(q, where("priorite", "==", filters_interventions.PRIORITE));
  }
  if (filters_interventions.CAUSE) {
    q = query(q, where("cause", "==", filters_interventions.CAUSE));
  }
  if (filters_interventions.DATE_MIN) {
    q = query(q, where("date", ">=", new Date(filters_interventions.DATE_MIN)));
  }
  if (filters_interventions.DATE_MAX) {
    q = query(q, where("date", "<=", new Date(filters_interventions.DATE_MAX)));
  }

  q = query(q, orderBy("date"), limit(10));

  console.log("q", q);

  const querySnapshot = await getDocs(q);
  items.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log("items", items);
}

//Fonction pour récupérer la couleur du badge
function getBadgeColor(statut) {
  switch (statut) {
    case "En Cours":
      return "orange";
    case "Terminée":
      return "green";
    case "En Préparation":
      return "blue";
    case "Annulée":
      return "red";
    default:
      return "grey";
  }
}
// Fonction pour formater la date
function formatDate(timestamp) {
  if (timestamp && timestamp.seconds) {
    // Conversion du _Timestamp en Date
    return new Date(timestamp.seconds * 1000).toLocaleDateString(); // Convertir en millisecondes
  }
  return "Date non spécifiée"; // Valeur par défaut si la date est invalide
}

// Charger les interventions une première fois
onMounted(fetchInterventions);
</script>

<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="filters_interventions.TITRE"
              label="Titre"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="filters_interventions.STATUT"
              :items="[
                { text: 'En Préparation', value: 'En Préparation' },
                { text: 'En Cours', value: 'En Cours' },
                { text: 'Terminé', value: 'Terminé' },
              ]"
              item-title="text"
              item-value="value"
              label="Statut"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="filters_interventions.MACHINE"
              label="Machine"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="filters_interventions.NATURE"
              :items="['Préventif', 'Correctif']"
              item-title="text"
              item-value="value"
              label="Nature"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="filters_interventions.PRIORITE"
              :items="['P1-Immédiat', 'P2-Dans la semaine', 'P3-Moins urgent']"
              label="Priorité"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="filters_interventions.DATE_MIN"
              label="Date Début"
              type="date"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="filters_interventions.DATE_MAX"
              label="Date Fin"
              type="date"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" @click="fetchInterventions">Filtrer</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Numéro</th>
              <th class="text-left">Titre</th>
              <th class="text-left">Date</th>
              <th class="text-left">Machine</th>
              <th class="text-left">Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="item.id">
              <td>{{ item.num_intervention }}</td>
              <td>{{ item.titre }}</td>
              <td>{{ formatDate(item.date) }}</td>
              <td>
                {{ item.installation.reference + "_" + item.installation.nom }}
              </td>
              <td>
                <!-- Badge de statut -->
                <v-badge :color="getBadgeColor(item.statut)" content=" ">
                  <v-chip :color="getBadgeColor(item.statut)" dark>
                    {{ item.statut }}
                  </v-chip>
                </v-badge>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </v-col>
  </v-row>
</template>
