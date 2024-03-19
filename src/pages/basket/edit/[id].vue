<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '@/supabase';
import FirstViewFilm from '@/components/FirstViewFilm.vue';

const route = useRoute();
const Film = ref({});

onMounted(async () => {
  const { data, error } = await supabase
    .from('Films')
    .select('*')
    .eq('id', route.params.id)
    .single();

  if (error) {
    console.error('Erreur lors de la récupération du Film:', error);
  } else {
    Film.value = data;
  }
});
</script>

<template>



  <FirstViewFilm v-bind="Film" />
</template>