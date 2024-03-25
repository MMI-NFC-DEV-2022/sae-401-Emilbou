<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router/auto'
import { supabase } from '@/supabase'
import FirstViewFilm from '@/components/userfilm/FirstViewFilm.vue'
const route = useRoute('/film/user/[id]')
</script>

<template>
  <FirstViewFilm :id_Films="route.params.id" />
</template>
