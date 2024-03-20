<template>
  <div class="flex gap-5">
     <RouterLink
    v-for="Film in Films"
    :to="{
name: '/basket/edit/[id]',
  params: {
    id:Film.id
  },
    }">
    <CardAccueil
      v-bind="Film"
      :key="Film.id"
      :nom_film="Film.nom_film"
      :duree_film="Film.duree_film"
      :date_film="Film.date_film"
      :description_film="Film.description_film"
      :affiche_film="Film.affiche_film"
    />
  </RouterLink>
  </div>
</template>

<script setup lang="ts">
import CardAccueil from '@/components/CardAccueil.vue';
import { supabase } from '@/supabase';

const { data: Films, error } = await supabase
  .from('Films')
  .select('*');
</script>