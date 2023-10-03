<script setup lang="ts">
import ButtonPrimaryVue from "../components/ButtonPrimary.vue";
import ToDoListCard from "../components/ToDoListCard.vue";
import { useTodoList } from "@/stores/globalStorage";
import type { ToDoList } from "@/types/todoList";
import { computed, reactive, toRefs } from "vue";

const useTodoListStore = useTodoList();

const todoList = reactive<ToDoList>({
  id: new Date(),
  title: "",
  date: new Date(),
  items: [],
});

const { title } = toRefs(todoList);

const createNewToDoList = () => {
  useTodoListStore.addList({ list: todoList });
  useTodoListStore.setShowModal({ showModal: false });

  todoList.title = "";
};

const allTodoLists = computed(() => useTodoListStore.allLists);

const showCreateModal = () => {
  useTodoListStore.setShowModal({ showModal: true });
};

const handleCloseModal = () => {
  useTodoListStore.setShowModal({ showModal: false });
};

</script>


<template>
  <header>
    <h1>To-Do</h1>
  </header>
  <div class="button-nav">
    <ButtonPrimaryVue
      title="Créer une To-Do liste"
      :handleClick="showCreateModal"
    />
  </div>
  <section class="list-card-container flex">
    <ToDoListCard :list="list" v-for="(list, i) in allTodoLists" :key="i" />
  </section>

  <div
    class="create-list-modal-container"
    v-if="allTodoLists.length === 0 || useTodoListStore.getShowModal"
  >
    <div class="create-list-modal">
      <h2>Créer une nouvelle liste</h2>
      <input type="text" placeholder="Titre de la liste" v-model="title" />
      <div class="button-container">
        <button v-on:click="handleCloseModal">Annuler</button>
        <button v-on:click="createNewToDoList">Créer</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-card-container {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}

.create-list-modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.468);
  display: flex;
  justify-content: center;
  align-items: center;
}

.create-list-modal {
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.create-list-modal .button-container {
  display: flex;
  justify-content: space-between;
}

.create-list-modal input {
  padding: 10px;
  border: 1px solid #dfdddd;
  border-radius: 5px;
  margin-bottom: 20px;
}

.create-list-modal button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: #0645ce;
}
.create-list-modal button:hover {
  opacity: 0.8;
}

.create-list-modal button:first-child {
  background-color: #d53b3b;
}

section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-height: 70vh;
  overflow-y: scroll;
}
</style>