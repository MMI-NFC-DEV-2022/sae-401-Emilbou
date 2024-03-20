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
            <RouterLink
    v-for="Filmographie in PersonnesFilms"
    :to="{
name: '/basket/edit/[id]',
  params: {
    id:Filmographie.id_films
  },
    }">
        <div class="flex justify-evenly my-5 gap-5">
        <div v-bind="Filmographie">
            
            <p>{{ Filmographie.Films.nom_film }}</p>
            <img :src="Filmographie.Films.affiche_film" alt="">
        </div>
        </div>
    </RouterLink>
</div>
</template>
