<template>
  <div>
    <h1>{{ nom_personne }}</h1>
    <img :src="image_personne" alt="" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ role_personne: string; image_personne: string; nom_personne: string;}>();
</script>