<template>
  <div class="flex gap-5">
    <CardPersonnes
      v-for="Personne in Personnes"
:role_personne="Personne.role_personne"
:image_personne="Personne.image_personne"
:nom_personne="Personne.nom_personne"
    />
  </div>
</template>

<script setup lang="ts">
import CardPersonnes from '@/components/CardPersonnes.vue';
import { supabase } from '@/supabase';

const { data: Personnes, error } = await supabase
  .from('Personnes')
  .select('*');
</script>