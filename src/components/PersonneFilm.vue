<script setup lang="ts">
import { supabase } from '@/supabase';
const props = defineProps<{
  id_Films: string,
}>()
const { data: FilmsPersonnes, error} = await supabase.from('Personnes_Films').select('id_Personnes,Personnes(nom_personne)').eq('id_films', props.id_Films)
console.log(FilmsPersonnes)
console.log(error)
</script>

<template>
    <div>
        <h2>Acteur</h2>
        <div v-for="Unacteur in FilmsPersonnes">
            <p>{{ Unacteur.Personnes.nom_personne }}</p>
        </div>
    </div>
</template>