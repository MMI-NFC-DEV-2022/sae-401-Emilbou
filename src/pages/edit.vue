<script setup lang="ts">
import { ref } from 'vue'
import { supabase, user } from '@/supabase'
import { useRouter } from 'vue-router'
import type { Films_utilisateur } from '@/types'
const router = useRouter()
const props = defineProps<{ data?: Films_utilisateur; id?: string }>()
const InsertFilmUser = ref<Films_utilisateur>(props.data ?? {})
InsertFilmUser.value.affiche_film = 'https://picsum.photos/200/300'
async function upsertFilm() {
  if (!InsertFilmUser.value) return
  const dureeEnMinutes = parseInt(
    InsertFilmUser.value.duree_film.split(':').reduce((acc, val) => acc * 60 + parseInt(val), 0)
  )

  const { data, error } = await supabase.from('Films_utilisateur').upsert({
    ...InsertFilmUser.value,
    duree_film: dureeEnMinutes
  })
  if (error) {
    console.error('Erreur lors de la mise à jour:', error.message)
  } else {
    router.push('/')
    console.log('Mise à jour réussie:', InsertFilmUser.value)
  }
}
</script>

<template>
  <h1>Ajout d'un film par l'utilisateur</h1>
  <FormKit type="form" v-model="InsertFilmUser" @submit="upsertFilm">
    <FormKit
      id="nom_film"
      name="nom_film"
      label="nom_film"
      validation="required"
      placeholder="Nom du film"
      class="w-full"
    />
    <FormKit
      id="description_film"
      name="description_film"
      type="textarea"
      label="description_film"
      validation="required"
      placeholder="Entrez le description du film"
      class="w-full"
    />
    <FormKit
      id="affiche_film"
      name="affiche_film"
      type="text"
      label="affiche_film"
      validation="required"
      placeholder="Entrez l'url de l'image"
      class="w-full"
    />
    <FormKit
      id="date_film"
      name="date_film"
      type="date"
      label="Date de sortie"
      validation="required"
      placeholder="Sélectionnez la date de sortie"
      class="w-full"
    />
    <FormKit
      id="duree_film"
      name="duree_film"
      type="text"
      label="Durée"
      validation="required"
      placeholder="la durée du film"
      mask="##:##:##"
      class="w-full"
    />

    <FormKit
      type="submit"
      label="Ajouter le film"
      class="w-full bg-[#F5C754] text-white font-bold py-2 px-4 rounded hover:bg-yellow-500"
    />
  </FormKit>
</template>
