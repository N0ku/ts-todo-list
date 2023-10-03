<script setup lang="ts">
import ListItem from "@/components/ListItem.vue";
import ModalFormAdd from "@/components/modal/ModalFormAdd.vue";
import { useTodoList } from "@/stores/globalStorage";
import { computed } from "vue";
import { useRoute,useRouter } from "vue-router";

const store = useTodoList();
const route = useRoute();
const router = useRouter();

const itemId = route.params.id; 

const selectedItem = computed(() => {
  return store.getLists.find((item) => item.id === itemId);
});
if (!selectedItem.value) {
  router.push("/error-404"); 
}
</script>

<template>
  <div>
    <ListItem :selectedItem="selectedItem" />
    <ModalFormAdd />
  </div>
</template>
