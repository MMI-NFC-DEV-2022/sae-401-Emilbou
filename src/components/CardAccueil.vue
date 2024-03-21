<template>
  <div class="flex flex-col justify-center text-center">
    <img class="object-cover w-full h-64 rounded-lg" :src="affiche_film" alt="" />
    <h1 class="text-lg font-bold mb-5">{{ nom_film }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ nom_film: string; duree_film: string; date_film: string; description_film: string; affiche_film: string }>();
</script>