<script setup lang="ts">
const props = defineProps(['task']);
import SelectState from "./SelectState.vue";
import DeleteIcon from "./icons/IconDelete.vue";
</script>

<template>
  <div
    class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
  >
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-2">
        <h5
          class="cols-start-1 col-span-4 mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50" v-bind:title="task.title"
        >
          {{ props.task.label }}
        </h5>
      </div>

      <div class="col-span-2 flex justify-end">
        <button
          type="button"
          class="inline-block rounded-full bg-red-500 text-white px-2 py-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <DeleteIcon />
        </button>
      </div>

      <SelectState />
    </div>
  </div>
</template>
