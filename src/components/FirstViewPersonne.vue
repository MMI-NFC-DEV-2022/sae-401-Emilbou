<template>
<div class="flex p-4">

    <img class="pr-4" :src="PersonnesData!.image_personne" alt="">
    <div>
    <p class="text-xl font-bold">{{ PersonnesData!.nom_personne }}</p>
<p class="text-lg font-semibold">{{ PersonnesData!.date_personne }}</p>
<p class="w-1/2">{{ PersonnesData!.description_personne }}</p>

</div>
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

