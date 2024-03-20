<template>
  <div>
    <h1>{{ nom_film }}</h1>
    <h1>{{ duree_film }}</h1>
    <h1>{{ date_film }}</h1>
    <h1>{{ description_film }}</h1>
    <img :src="affiche_film" alt="" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ nom_film: string; duree_film: string; date_film: string; description_film: string; affiche_film: string }>();
</script>