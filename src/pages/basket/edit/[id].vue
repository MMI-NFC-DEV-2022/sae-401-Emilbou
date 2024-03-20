<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import FirstViewFilm from '@/components/FirstViewFilm.vue';
import SupportsFilms from '@/components/SupportsFilms.vue';
import PersonneFilm from '@/components/PersonneFilm.vue';
import PlateformeFilm from '@/components/PlateformeFilm.vue';
const route = useRoute("/basket/edit/[id]");
</script>

<template>



  <FirstViewFilm :id_Films="route.params.id" />

  
  <PlateformeFilm :id_Films="route.params.id" class="p-4" />
  <SupportsFilms :id_Films="route.params.id" />
  <PersonneFilm :id_Films="route.params.id" />

</template>