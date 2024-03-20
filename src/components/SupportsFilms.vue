<script setup lang="ts">
import { supabase } from '@/supabase';
const props = defineProps<{
  id_Films: string,
}>()
const { data: FilmsSupports, error} = await supabase.from('Supports_Films').select('id_supports,Supports(nom_support)').eq('id_films', props.id_Films)
console.log(FilmsSupports)
console.log(error)
</script>

<template>
    <div class="bg-noir">
    <div class="p-4 text-blanc">

        <h2 class="text-lg font-bold mb-5">Supports</h2>
<div class="flex justify-center w-full">
    
            <div v-for="Unsupport in FilmsSupports">
                <p>{{ Unsupport.Supports.nom_support }}</p>
    
</div>
        </div>
        <div class="w-full flex justify-evenly mb-10 mt-10">
            
            <button class="bg-orange text-noir font-bold w-3/4 py-3 rounded-xl mt-5">
            Voir toutes les offres
        </button>
    </div>
</div>
</div>
</template>