<script setup lang="ts">
import { supabase } from '@/supabase';
const props = defineProps<{
  id_Films: string,
}>()
const { data: FilmsPlateformes, error} = await supabase.from('Plateformes_Films').select('id_plateformes,Plateformes(nom_plateforme)').eq('id_films', props.id_Films)
console.log(FilmsPlateformes)
console.log(error)
</script>

<template>
    <div>
        <h2 class="text-lg font-bold mb-5">Où regarder</h2><div class="flex justify-evenly my-5">
            
            <div v-for="Uneplateforme in FilmsPlateformes" >
                <p v-bind="Uneplateforme">{{ Uneplateforme.Plateformes.nom_plateforme }}</p>
            </div>
        </div><div class="w-full flex justify-center mb-10">
            
            <button class="bg-orange font-bold w-3/4 py-3 rounded-xl mt-5">
            Voir toutes les offres
            </button>
        </div>
    </div>
</template>