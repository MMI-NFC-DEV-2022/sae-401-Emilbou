<script setup lang="ts">
import CardAccueil from '@/components/CardAccueil.vue';
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue'
import { supabase } from '@/supabase';
import type { FilmsType } from '@/types';
const props = defineProps<FilmsType>()

const { data: Films, error } = await supabase
  .from('Films')
  .select('*')


console.log(Films)
</script>

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
      
      <CardAccueil v-bind="Film"/>
      
    </RouterLink>
    </div>

</template>
