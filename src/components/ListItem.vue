<template>
  <h1 class="text-6xl font-bold text-center text-blue-700">To Do List Name : {{ props.selectedItem.name }}</h1>
  <ul class="task-list">
    <li class="task-list-item" v-for="task in props.selectedItem.itemsList">
      <Item :task="task" :label="props.selectedItem.name" />
    </li>
  </ul>
</template>
<script setup lang="ts">
import Item from "./Item.vue";
const props = defineProps(["selectedItem"]);
</script>
