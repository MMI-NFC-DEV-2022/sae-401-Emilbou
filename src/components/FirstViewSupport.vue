<script setup lang="ts">
import { supabase } from '@/supabase'
const props = defineProps<{
  id_Films: string
}>()
const { data: FilmsSupports, error } = await supabase
  .from('Supports_Films')
  .select('id_films,Films(nom_film),id_supports,Supports(image_support)')
  .eq('id_films', props.id_Films)
console.log(FilmsSupports)
console.log(error)
</script>

<template>
  <div class="bg-blanc">
    <div class="p-4">
      <RouterLink
        v-for="Unsupport in FilmsSupports"
        :to="{
          name: '/film/[id]',
          params: {
            id: Unsupport.id_films
          }
        }"
      >
        <h2 class="text-lg font-bold mb-5">Supports de {{ FilmsSupports[0].Films.nom_film }}</h2>

        <div class="flex justify-evenly w-full gap-10">
          <img :src="Unsupport.Supports.image_support" class="" alt="" />
        </div>
      </RouterLink>
    </div>
  </div>
</template>
