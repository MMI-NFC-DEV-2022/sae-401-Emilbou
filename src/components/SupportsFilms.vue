<script setup lang="ts">
import { supabase } from '@/supabase';
const props = defineProps<{
  id_Films: string,
}>()
const { data: FilmsSupports, error} = await supabase.from('Supports_Films').select('id_supports,Supports(image_support)').eq('id_films', props.id_Films)
console.log("Dans SupportFilm, le support : ",FilmsSupports)
if (error) {
    console.error('Erreur lors de la récupération des supports : ', error)
    }
</script>

<template>
    <div class="bg-noir">
    <div class="p-4 text-blanc">

        <h2 class="text-lg font-bold mb-5">Supports</h2>
<div class="flex justify-evenly w-full gap-10">
            <div v-for="unSupport of FilmsSupports" >
                <img :src="unSupport.Supports.image_support" class="" alt="">
    
</div>
        </div>
        <div class="w-full flex justify-evenly mb-10 mt-10">
            
            <a :href="`/support/${id_Films}`" class="bg-orange text-noir font-bold w-3/4 py-3 rounded-xl mt-5">
            <button  class="text-center w-full flex justify-center">
            Voir toutes les offres
        </button>
    </a>
    </div>
</div>
</div>
</template>