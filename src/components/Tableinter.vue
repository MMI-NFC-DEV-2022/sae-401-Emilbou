<script setup lang="ts">

// Dans votre composant Vue.js

import { ref, onMounted } from 'vue';
import { supabase } from '@/services/supabase';

export default {
  setup() {
    const FilmsSupports = ref([]);

    onMounted(async () => {
      // Récupérer les données de la table intermédiaire avec les détails des Films et des Supports associés
      const { data: FilmsSupportsData, error } = await supabase
        .from('Films_Supports')
        .select(`
          Films:id_Films(*),
          Supports:id_Supports(*)
        `);
      
      if (error) {
        console.error('Erreur lors de la récupération des données:', error.message);
        return;
      }

      // Mettre à jour la variable FilmsSupports avec les données récupérées
      FilmsSupports.value = FilmsSupportsData;
    });

    return {
      FilmsSupports,
    };
  },
};


</script>

<template>
  <div>
    <h2>Relations entre Films et Supports</h2>
    <ul>
      <li v-for="(FilmSupport, index) in FilmsSupports" :key="index">
        <p>Film: {{ FilmSupport.Films.titre }}</p>
        <p>Support: {{ FilmSupport.Supports.nom }}</p>
      </li>
    </ul>
  </div>
</template>
