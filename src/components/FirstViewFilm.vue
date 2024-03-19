<template>
  <div
    :style="{ 'background-image': 'url(' + affiche_film + ')' }"
    class="p-5 flex flex-col bg-cover justify-between"
  >
    <div class="flex justify-between w-full pb-5">
      <h1>{{ nom_film }}</h1>
      <div>favori</div>
    </div>
    <div class="flex justify-between">
      <div class="w-1/2 flex flex-col justify-between">
        <div class="flex flex-col">
          <p>{{ description_film }}</p>
          <span>{{ date_film }}</span>
          <span>{{ duree_film }}</span>
        </div>
        <div>genre et notes</div>
      </div>
      <div class="w-1/3">
        <img :src="affiche_film" class="rounded-md" alt="" />
      </div>
    </div>
  </div>
<div class="p-5">
    
      <h2>
        Synopsis
      </h2>
      <p>{{ description_film }}</p>

      <h2>
        Où regarder
      </h2>
      <!-- afficher les différentes plateformes de streaming -->
      <button>
        Voir toutes les offres
      </button>
      <div>
        <h2>Supports</h2>
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

defineProps<FilmsType>();


</script>