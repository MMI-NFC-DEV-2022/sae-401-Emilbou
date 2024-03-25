<script setup lang="ts">
import { supabase, user } from '@/supabase'
import CardAccueil from '@/components/CardAccueil.vue'
import iconerecherche from '@/components/icons/iconerecherche.vue'
import CardPersonnes from '@/components/CardPersonnes.vue'
const { data: Films, error } = await supabase.from('Films').select('*')
const { data: Personnes } = await supabase.from('Personnes').select('*')
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

  <div class="w-full flex justify-center mb-14">
    <div class="flex flex-start w-4/5 p-4 bg-slate-300 rounded-full gap-5">
      <iconerecherche></iconerecherche>
      <input class="bg-transparent w-full text-noir" type="text" placeholder="Recherche" />
    </div>
  </div>
  <div class="p-4">
    <h2 class="text-3xl font-bold mb-5">Les films du moment</h2>
    <div class="flex gap-5">
      <RouterLink
        v-for="Film in Films"
        :to="{
          name: '/film/[id]',
          params: {
            id: Film.id
          }
        }"
      >
        <CardAccueil
          v-bind="Film"
          :key="Film.id"
          :nom_film="Film.nom_film"
          :duree_film="Film.duree_film"
          :date_film="Film.date_film"
          :description_film="Film.description_film"
          :affiche_film="Film.affiche_film"
        />
      </RouterLink>
    </div>
  </div>
  <div class="p-4">
    <div class="w-full flex justify-end">
      <router-link to="/film" class="font-bold bg-slate-300 p-4 rounded-2xl mb-14"
        >Voir tout les films</router-link
      >
    </div>
  </div>
  <div class="bg-cover bg-[url('../assets/images/coveraccueil.png')]">
    <div class="p-4 py-10 flex flex-col">
      <h2 class="flex flex-col text-blanc text-3xl font-bold mb-10">
        <span>Rejoins la communauté</span>
        <span>Dès maintenant</span>
      </h2>
      <div class="flex justify-end">
        <router-link class="text-noir font-bold bg-orange p-4 rounded-2xl px-10" to="/login"
          >Inscription</router-link
        >
      </div>
    </div>
  </div>

  <div class="p-4">
    <h2 class="text-3xl font-bold mb-5 mt-14">Nouveautés</h2>
    <div class="flex gap-5">
      <RouterLink
        v-for="Film in Films"
        :to="{
          name: '/film/[id]',
          params: {
            id: Film.id
          }
        }"
      >
        <CardAccueil
          v-bind="Film"
          :key="Film.id"
          :nom_film="Film.nom_film"
          :duree_film="Film.duree_film"
          :date_film="Film.date_film"
          :description_film="Film.description_film"
          :affiche_film="Film.affiche_film"
        />
      </RouterLink>
    </div>
  </div>
  <div class="p-4">
    <div class="w-full flex justify-end">
      <router-link to="/film" class="font-bold bg-slate-300 p-4 rounded-2xl mb-14"
        >Voir toutes les nouveautés</router-link
      >
    </div>
  </div>
  <hr />
  <div class="p-4 flex justify-start gap-4">
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
  <div class="p-4">
    <div class="w-full flex justify-end">
      <router-link to="/personne" class="font-bold bg-slate-300 p-4 rounded-2xl mb-14"
        >Voir toutes les personnes</router-link
      >
    </div>
  </div>
</template>
