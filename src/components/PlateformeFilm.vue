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
        <h2 class="text-lg font-bold">Plateforme</h2>
        <div v-for="Uneplateforme in FilmsPlateformes">
            <p>{{ Uneplateforme.Plateformes.nom_plateforme }}</p>
        </div>
    </div>
</template>