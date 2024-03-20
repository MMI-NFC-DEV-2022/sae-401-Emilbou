<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import FirstViewSupport from '@/components/FirstViewSupport.vue';
const route = useRoute("/support/[id]");
</script>

<template>



  <FirstViewSupport :id_Films="route.params.id"/>

</template>