<script setup lang="ts">
import ButtonPrimaryVue from "../components/ButtonPrimary.vue";
import ToDoListCard from "../components/ToDoListCard.vue";

const createNewToDoList = () => {
  console.log("createNewToDoList");
};
</script>


<template>
  <header>
    <h1>To-Do</h1>
  </header>
  <div class="button-nav">
  <ButtonPrimaryVue title="Créer une To-Do liste" :handleClick="createNewToDoList" />

  </div>
  <section class="list-card-container flex"> <!-- TODO : Foreach à faire pour les cards -->
    <ToDoListCard />
    <ToDoListCard />
    <ToDoListCard />
    <ToDoListCard />
    <ToDoListCard />
    <ToDoListCard />
    <ToDoListCard />
    <ToDoListCard />
    <ToDoListCard />
  </section>
</template>

<style scoped>

.list-card-container{
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}
</style>