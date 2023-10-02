<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <div class="content">
      <RouterView />
    </div>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

h1 {
  font-weight: 400;
  line-height: normal;
  font-size: normal;
  padding: 40px 0px;
}

main {
  width: 100%;
  height: 100%;
  padding: 20px;

}
header {
  width: 100%;
  border-bottom: 2px solid #dfdddd;
}
</style>
