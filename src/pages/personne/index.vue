<template>
  <div class="flex gap-5">
    <RouterLink
      v-for="Personne in Personnes"
      :to="{
        name: '/personne/[id]',
        params: {
          id: Personne.id
        }
      }"
    >
      <CardPersonnes
        v-bind="Personne"
        :role_personne="Personne.role_personne"
        :image_personne="Personne.image_personne"
        :nom_personne="Personne.nom_personne"
      />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import CardPersonnes from '@/components/CardPersonnes.vue'
import { supabase } from '@/supabase'

const { data: Personnes, error } = await supabase.from('Personnes').select('*')
</script>
