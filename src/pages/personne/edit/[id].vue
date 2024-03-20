<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import FirstViewPersonne from '@/components/FirstViewPersonne.vue';
const route = useRoute("/personne/edit/[id]");
</script>

<template>



  <FirstViewPersonne :id_Personnes="route.params.id"/>


</template>