<script setup lang="ts">
import { ref } from 'vue'
import { supabase, user } from '@/supabase'
import SupportsFilms from '@/components/SupportsFilms.vue';
</script>

<template>
  <div v-if="user">bonjour {{ user.email }}</div>
  <div v-else></div>
<nav class="p-5">

  <ul>
    <li class="text-4xl">
      <router-link to="/">Home</router-link>
    </li>
    <li class="text-4xl">
      <router-link to="/film">données de supabase</router-link>
      </li>
    <li class="text-4xl">
      <router-link to="/login">page connexion</router-link>
      </li>
    <li class="text-4xl">
      <router-link to="/personne">personnes</router-link>
      </li>
  </ul>
</nav>



</template>