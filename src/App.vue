<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {Suspense} from 'vue'
import HeaderMain from '@/components/HeaderMain.vue';
import FooterMain from './components/FooterMain.vue';
</script>

<template>


  <HeaderMain/>
  <Suspense>
    <RouterView />
  </Suspense>
  <FooterMain/>
</template>
