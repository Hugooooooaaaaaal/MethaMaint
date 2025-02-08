<script setup>
import { ref, onMounted } from "vue";
import { db } from "../firebase.config.js";
import { collection, getDocs, doc, setDoc, addDoc } from "firebase/firestore";

const arborescence = {};

const fetchArborescence = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "arborescence"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

// Add a new document in collection "cities"
async function modify_equipement() {
  await setDoc(doc(db, "arborescence", "test"), {
    nom: "Los sdfdsfd",
  });
  fetchArborescence;
}

async function add_equipement() {
  await addDoc(collection(db, "arborescence"), {
    nom: "Los sdfdsfd",
    description: "disdpjfk",
    code: "sdifjsd",
  });
  fetchArborescence;
}

onMounted(fetchArborescence);
</script>

<template>
  <v-btn color="deep-purple-darken-2" size="x-large" @click="add_equipement()">
    Open Dialog
  </v-btn>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Nom</th>
        <th class="text-left">Description</th>
        <th class="text-left">Code</th>
      </tr>
    </thead>
    <tbody v-if="arborescence.length">
      <tr v-for="item in arborescence" :key="item.id">
        <td>{{ item.nom }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.code }}</td>
      </tr>
    </tbody>
    <p v-else>Chargement des données...</p>
  </v-table>
</template>
