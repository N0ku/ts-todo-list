<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  handleClick: { type: Function, required: true },
});
</script>
<template lang="">
        <button class="button-primary" v-on:click="handleClick">
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
          fill="white"
        />
      </svg>
      <span>{{title}}</span>
    </button>
</template>
<style scoped>
.button-primary {
  background-color: #3b40d5;
  border-radius: 10px;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.button-primary:hover {
  background-color: #3b40d5;
  opacity: 0.8;
}

svg {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}
</style>