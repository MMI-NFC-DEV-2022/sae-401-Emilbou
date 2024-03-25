<script setup lang="ts">
import { ref } from 'vue'
import { supabase, user } from '@/supabase'
import type { AuthError } from '@supabase/supabase-js'

const email = ref('')
const password = ref('')
const error = ref('')

const signInWithPassword = async () => {
  // try {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) throw error
  // } catch (err) {
  //   error.value = (err as  AuthError).message
  // }
}
async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  })
}
async function signOut() {
  const { error } = await supabase.auth.signOut()
}
</script>

<template>
  <div class="p-10">
    <div class="flex flex-col gap-10 p-10 border rounded-3xl">
      <div class="p-10">
        <h2>Connexion</h2>
        <div v-if="error">{{ error }}</div>
        <div v-if="user">
          <p>Vous êtes connecté en tant que {{ user.email }}</p>
          <button @click="supabase.auth.signOut()">Se déconnecter</button>
        </div>
        <div v-else>
          <form @submit.prevent="signInWithPassword" class="flex flex-col">
            <label>
              Email
              <input type="email" v-model="email" required />
            </label>
            <label>
              Mot de passe
              <input type="password" v-model="password" required />
            </label>
            <button type="submit" class="p-4 border w-fit justify-center flex items-center">
              Se connecter
            </button>
          </form>
        </div>
        <form @submit.prevent="signInWithGithub" class="flex flex-col">
          <button type="submit" class="p-4 border w-fit justify-center flex items-center">
            Se connecter/ s'inscrire avec github
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
