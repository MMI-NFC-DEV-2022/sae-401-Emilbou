<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router/auto'
import { supabase } from '@/supabase'
import FirstViewPersonne from '@/components/FirstViewPersonne.vue'
import FilmographiePersonne from '@/components/FilmographiePersonne.vue'
const route = useRoute('/personne/[id]')
</script>

<template>
  <FirstViewPersonne :id_Personnes="route.params.id" />
  <FilmographiePersonne :id_Personnes="route.params.id" />
</template>
