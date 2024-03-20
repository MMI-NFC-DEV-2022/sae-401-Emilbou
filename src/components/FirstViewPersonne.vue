<template>
<div>

<p>{{ PersonnesData!.nom_personne }}</p>

</div>
</template>

<script setup lang="ts">
import { supabase } from '@/supabase';
import { ref, onMounted } from 'vue';
const Film = ref({});
const props = defineProps<{
  id_Personnes: string,
}>()
const { data: PersonnesData, error} = await supabase.from('Personnes').select('*').eq('id', props.id_Personnes).single()
console.log(PersonnesData)
console.log(error)
</script>

