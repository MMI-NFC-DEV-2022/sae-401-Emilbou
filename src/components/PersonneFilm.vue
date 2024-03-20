<script setup lang="ts">
import { supabase } from '@/supabase';
const props = defineProps<{
  id_Films: string,
}>()
const { data: FilmsPersonnes, error} = await supabase.from('Personnes_Films').select('id_Personnes,Personnes(nom_personne, role_personne, image_personne)').eq('id_films', props.id_Films)
console.log(FilmsPersonnes)
console.log(error)
</script>

<template>
    <div class="p-4">
        <h2 class="text-lg font-bold mb-5 mt-5">Personnes</h2>
        <div class="flex flex-row justify-evenly my-5 gap-5">
        <RouterLink
        
    v-for="Unacteur in FilmsPersonnes"
    :to="{
name: '/personne/edit/[id]',
  params: {
    id:Unacteur.id_Personnes
  },
    }">
        <div class="flex flex-row justify-evenly my-5 gap-5 ">
        <div>
            <p>{{ Unacteur.Personnes.nom_personne }}</p>
            <img :src="Unacteur.Personnes.image_personne" alt="">
            <p>{{ Unacteur.Personnes.role_personne }}</p>
        </div>
        </div>
         </RouterLink>
    </div>
    </div>
</template>
