<template>
  <ul class="task-list">
    <li class="task-list-item" v-for="task in tasks">
      <Item :task="task" />
      <span class="delete-btn" title="Delete Task"></span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import Item from "./Item.vue";
const tasks = [
  {
    id: 1,
    label: "Faire à manger ",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnupI1_9vYSqAuC-5JYP6SjegeRIbenJbi2NMClOkB&s",
  },
  {
    id: 2,
    label: "Boire de l'eau",
    avatar:
      "https://www.photo-denfert.com/upload/image/fond-papier-orange-tangerine---152-bd-p-image-51750-grande.jpg",
  },
  {
    id: 3,
    label: "Dormir",
    avatar:
      "https://img.freepik.com/photos-premium/resume-fond-rouge-decoration-noel-valentines-studio-piece-modele-web-rapport-affaires-couleur-gradient-cercle-lisse_1258-681.jpg",
  },
  {
    id: 4,
    label: "Mais non ",
    avatar: "https://www.level.fr/wp-content/uploads/2021/01/fond-vert.jpg",
  },
];
</script>
