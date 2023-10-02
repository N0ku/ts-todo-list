<template>
    <div class="navbar">
       <button class="nav-button">Bouton 1</button>
       <button class="nav-button">Bouton 2</button>
       <button class="nav-button">Bouton 3</button>
       <button class="nav-button">Bouton 4</button>
   </div>
</template>

<style scoped>
.navbar {
   width: 10%; 
   height: 100vh; 
   left: 0%;
   background-color: #333; 
   padding: 20px;
   display: flex;
   flex-direction: column; 
}

.nav-button {
   background-color: #ffffff00; 
   color: white;
   border: none;
   padding: 10px 20px;
   margin: 5px 0;
   text-align: left;
   text-decoration: none;
   font-size: 16px;
   cursor: pointer;
}

.nav-button:hover {
   background-color: #777; /* Couleur de fond au survol */
}
</style>
