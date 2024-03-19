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
    <div>
        <h2>Supports</h2>
        <div v-for="Unsupport in FilmsSupports">
            <p>{{ Unsupport.Supports.nom_support }}</p>
        </div>
    </div>
</template>