<template>
  <RouterLink
    v-for="Unfilm of Films"
    :to="{
      name: '/testpdf/[id]',
      params: {
        id: Unfilm.id
      }
    }"
  >
    <div class="flex-col">
      <p>{{ Unfilm.nom_film }}</p>
      <img :src="Unfilm.affiche_film" alt="" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { supabase } from '@/supabase'
import { RouterLink } from 'vue-router'
const { data: Films, error } = await supabase.from('Films').select('*')
</script>
