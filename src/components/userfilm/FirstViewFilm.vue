<template>
  <div
    :style="{
      'background-image':
        'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' +
        FilmsData!.affiche_film +
        ')',
      'background-size': 'cover',
      'background-position': 'top',
      'background-repeat': 'no-repeat'
    }"
    class="p-5 flex flex-col justify-between"
  >
    <div class="flex justify-between w-full pb-5">
      <h1 class="text-custom-blanc text-blanc text-xl font-bold">{{ FilmsData!.nom_film }}</h1>
      <div>favori</div>
    </div>
    <div class="flex justify-between">
      <div class="w-1/2 flex flex-col justify-between">
        <div class="flex flex-col">
          <p class="text-custom-blanc text-blanc text-md">{{ FilmsData!.condense_film }}</p>
          <span class="text-custom-blanc text-blanc text-lg">{{ FilmsData!.date_film }}</span>
          <span class="text-custom-blanc text-blanc text-lg">{{ FilmsData!.duree_film }}</span>
        </div>
        <div>genre et notes</div>
      </div>
      <div class="w-1/3">
        <img :src="FilmsData!.affiche_film" class="rounded-md" alt="" />
      </div>
    </div>
  </div>
  <div class="p-4">
    <h2 class="titre2mobile mt-4">Synopsis</h2>
    <p class="mt-4">{{ FilmsData!.description_film }}</p>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/supabase'
import { ref, onMounted } from 'vue'
const Film = ref({})
const props = defineProps<{
  id_Films: string
}>()
const { data: FilmsData, error } = await supabase
  .from('Films_utilisateur')
  .select('*')
  .eq('id', props.id_Films)
  .single()
console.log(FilmsData)
console.log(error)
</script>

<style scoped></style>
