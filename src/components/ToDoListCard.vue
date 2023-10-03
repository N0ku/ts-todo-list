<script setup lang="ts">
import { defineProps } from "vue";
import type { ToDoList } from "@/types/todoList";
import { useTodoList } from "@/stores/globalStorage";

const useTodoListStore = useTodoList();

defineProps<{ list: ToDoList }>();

function OnClickDeleteList(id: number) {
    useTodoListStore.removeList({ id: id });
    useTodoListStore.setShowModalDelete({ showModalDelete: false });
}

const ShowDeleteConfirmModal = () => {
  useTodoListStore.setShowModalDelete({ showModalDelete: true });
};

const HideDeleteConfirmModal = () => {
  useTodoListStore.setShowModalDelete({ showModalDelete: false });
};
</script>

<template lang="">
    <div class="to-do-list-card flex">
        <span class="delete-to-do-list" v-on:click="ShowDeleteConfirmModal">
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 290 290" xml:space="preserve">
<g id="XMLID_24_">
	<g id="XMLID_29_">
		<path d="M265,60h-30h-15V15c0-8.284-6.716-15-15-15H85c-8.284,0-15,6.716-15,15v45H55H25c-8.284,0-15,6.716-15,15s6.716,15,15,15
			h5.215H40h210h9.166H265c8.284,0,15-6.716,15-15S273.284,60,265,60z M190,60h-15h-60h-15V30h90V60z"/>
	</g>
	<g id="XMLID_86_">
		<path d="M40,275c0,8.284,6.716,15,15,15h180c8.284,0,15-6.716,15-15V120H40V275z"/>
	</g>
</g>
</svg>
        </span>
        <div>
            <p class="title-to-do-list">
                {{ list.title }}
            </p>
          <p class="date-to-do-list">
                {{ list.date.getDate() }}/{{ list.date.getMonth() + 1 }}/{{ list.date.getFullYear() }}
            </p> 
        </div>
    </div>
  <div
    class="create-list-modal-container"
    v-if="useTodoListStore.getShowModalDelete"
  >
      <div class="create-list-modal">
      <h2>Êtes-vous sur de vouloir supprimer cette liste ?</h2>
      <div class="button-container">
        <button v-on:click="HideDeleteConfirmModal">Annuler</button>
        <button v-on:click="OnClickDeleteList(list.id)">Confirmer</button>
      </div>
        </div>
    </div>

</template>
<style scoped>
.to-do-list-card {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 20px;
  border: 1px solid #dfdddd;
  width: 20%;
  height: 100px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  margin: 20px 10px;
}
.title-to-do-list {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
}

.to-do-list-card:hover {
  transform: scale(1.03);
  border-color: #3b40d5;
}
.delete-to-do-list {
  position: absolute;
  top: 10px;
  right: 0px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.to-do-list-card:hover .delete-to-do-list {
  opacity: 1;
}

.delete-to-do-list:hover svg {
  fill: #d53b3b;
}

svg {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  transition: all 0.3s ease-in-out;
}
</style>