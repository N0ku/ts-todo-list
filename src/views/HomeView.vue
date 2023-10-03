<script setup lang="ts">
import ButtonPrimaryVue from "../components/ButtonPrimary.vue";
import ToDoListCard from "../components/ToDoListCard.vue";
import { useTodoList } from "@/stores/globalStorage";
import type { ToDoList } from "@/types/todoList";

const useTodoListStore = useTodoList();

const createNewToDoList = () => {
  const newToDoList: ToDoList = {
    id: Math.random().toString(36).substr(2, 9),
    title: "Ma nouvelle liste",
    date: new Date(),
    items: [],
  };
  useTodoListStore.addList(newToDoList);
};


</script>


<template>
  <header>
    <h1>To-Do</h1>
  </header>
  <div class="button-nav">
    <ButtonPrimaryVue
      title="Créer une To-Do liste"
      :handleClick="createNewToDoList"
    />
  </div>
  <section class="list-card-container flex">
      <ToDoListCard :list="list" v-for="(list, i) in useTodoListStore.allLists" :key="i" />
  </section>


</template>

<style scoped>
.list-card-container {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}
</style>