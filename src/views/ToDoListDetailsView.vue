<script setup lang="ts">
import Item from "../components/Item.vue";
</script>
<template>
  <div class="list">
    <h1>ToDo List</h1>
    <p>Paramètre 'id' dans l'URL : {{ $route.params.id }}</p>
    <Item />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
