<script setup>
import { ref, onMounted, computed } from "vue";
import { db } from "../firebase.config.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import TreeNode from "./TreeNode.vue";

const arborescence = ref([]);
const search = ref("");
const open = ref([]);

const buildTree = (items) => {
  const map = {};
  const roots = [];

  // Créer un objet de correspondance { code: { ...item, children: [] } }
  items.forEach((item) => {
    map[item.code] = { ...item, children: [] };
  });

  // Attacher chaque item à son parent le plus proche
  items.forEach((item) => {
    let parentCode = item.code.split("-").slice(0, -1).join("-");

    while (parentCode && !map[parentCode]) {
      // Trouver le parent existant le plus proche
      parentCode = parentCode.split("-").slice(0, -1).join("-");
    }

    if (parentCode && map[parentCode]) {
      map[parentCode].children.push(map[item.code]);
    } else {
      // Si aucun parent trouvé, c'est un élément racine
      roots.push(map[item.code]);
    }
  });

  return roots;
};

const fetchArborescence = async () => {
  try {
    const q = query(collection(db, "installations"), orderBy("code"));
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot", querySnapshot);
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    console.log("items", items);
    arborescence.value = buildTree(items);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

const filterFn = (item, search) => {
  return item.libelle.toLowerCase().includes(search.toLowerCase());
};

const filteredArborescence = computed(() => {
  if (!search.value) {
    return arborescence.value;
  }
  const openNodes = new Set();
  const filterTree = (items) => {
    return items
      .map((item) => {
        if (filterFn(item, search.value)) {
          openNodes.add(item.id);
          return item;
        }
        if (item.children) {
          const filteredChildren = filterTree(item.children);
          if (filteredChildren.length) {
            openNodes.add(item.id);
            return { ...item, children: filteredChildren };
          }
        }
        return null;
      })
      .filter((item) => item !== null);
  };
  const filteredItems = filterTree(arborescence.value);
  open.value = Array.from(openNodes);
  return filteredItems;
});

onMounted(fetchArborescence);
</script>

<template>
  <v-card class="mx-auto" max-width="500">
    <v-sheet class="pa-4 bg-primary">
      <v-text-field
        v-model="search"
        label="Rechercher"
        placeholder="Rechercher"
        hide-details
        clearable
      />
    </v-sheet>
    <v-container>
      <v-list>
        <v-list>
          <TreeNode
            v-for="item in filteredArborescence"
            :key="item.id"
            :node="item"
          />
        </v-list>
      </v-list>
    </v-container>
  </v-card>
</template>
