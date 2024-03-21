<script setup lang="ts">
import { supabase } from '@/supabase';
const props = defineProps<{
  id_Personnes: string,
}>()
const { data: PersonnesFilms, error} = await supabase.from('Personnes_Films').select('id_films,Films(nom_film, affiche_film)').eq('id_Personnes', props.id_Personnes)
console.log(PersonnesFilms)
console.log(error)
</script>

<template>
  <div class="p-4">
    <h2 class="text-lg font-bold mb-5 mt-5">Filmographie</h2>
    <div class="w-1/2 flex flex-row justify-evenly">
      <RouterLink v-for="Filmographie in PersonnesFilms" :to="{
name: '/film/edit/[id]',
  params: {
    id:Filmographie.id_films
  },
    }">
        <div class="flex justify-evenly my-5 gap-5 ">
          <div v-bind="Filmographie" class="flex w-full justify-center flex-col text-start">

            <img class="object-cover w-full h-72 rounded-t-2xl" :src="Filmographie.Films?.affiche_film" alt="">
            <p class="mt-2 text-lg font-bold ">{{ Filmographie.Films?.nom_film }}</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
