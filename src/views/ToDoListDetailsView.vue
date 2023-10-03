<script setup lang="ts">
import Item from "../components/Item.vue";
</script>
<template>
  <div class="list">
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
