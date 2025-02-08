<template>
  <v-list-group v-if="node.children && node.children.length" :value="node.name">
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props">
        {{ node.libelle }}
      </v-list-item>
    </template>
    <TreeNode v-for="child in node.children" :key="child.id" :node="child" />
  </v-list-group>

  <v-list-item v-else>
    {{ node.libelle }}
  </v-list-item>
</template>

<script setup lang="ts">
defineProps<{ node: { id: number; libelle: string; children?: any[] } }>();
</script>
