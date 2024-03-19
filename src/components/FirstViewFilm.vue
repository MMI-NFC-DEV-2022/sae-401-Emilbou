<template>
  <div
    :style="{
        'background-image': 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + affiche_film + ')',
        'background-size': 'cover',
        'background-position': 'top',
        'background-repeat': 'no-repeat'
    }"
    class="p-5 flex flex-col justify-between"
>

    <div class="flex justify-between w-full pb-5">
      <h1 class="text-custom-blanc text-blanc text-xl font-bold">{{ nom_film }}</h1>
      <div>favori</div>
    </div>
    <div class="flex justify-between">
      <div class="w-1/2 flex flex-col justify-between">
        <div class="flex flex-col">
          <p class="text-custom-blanc text-blanc text-base ">{{ condense_film }}</p>
          <span class="text-custom-blanc text-blanc text-base ">{{ date_film }}</span>
          <span class="text-custom-blanc text-blanc text-base ">{{ duree_film }}</span>
        </div>
        <div>genre et notes</div>
      </div>
      <div class="w-1/3">
        <img :src="affiche_film" class="rounded-md " alt="" />
      </div>
    </div>
  </div>
<div class="p-5">
    
      <h2 class="titre2mobile mt-4">
        Synopsis
      </h2>
      <p class="mt-4">{{ description_film }}</p>

      <h2 class="mt-7">
        Où regarder
      </h2>
      <!-- afficher les différentes plateformes de streaming -->
      <button class="py-2 w-full rounded-2xl bg-orange border-solid border font-bold my-5">
        Voir toutes les offres
      </button>
      <div>
        <h2>Supports</h2>
        <p>{{ film_support }}</p>
        <!-- afficher les différents supports -->
        <button>
          Voir toutes les versions
        </button>
      </div>
      <h2>
        Casting
      </h2>
      <!-- afficher les différentes personnes et leurs rôles -->
</div>
</template>

<script setup lang="ts">
import type { FilmsType } from '@/types';
import { supabase } from '@/supabase';
defineProps<FilmsType>();


</script>

<style scoped>
h2{

/* Heading 2 mobile */
font-family: "Spline Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

p {


/* Body 1 mobile */
font-family: "Spline Sans";
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 138.462% */
}
</style>