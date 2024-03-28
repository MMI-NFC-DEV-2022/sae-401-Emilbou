<script setup lang="ts">
import { useRoute } from 'vue-router/auto'
import pdfcomponent from '@/components/pdfcomponent.vue'
const route = useRoute('/testpdf/[is]')
</script>

<template>
  <pdfcomponent :id_Films="route.params.id"></pdfcomponent>
</template>
