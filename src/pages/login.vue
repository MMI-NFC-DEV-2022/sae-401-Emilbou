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
      password: password.value,
    })
    if (error) throw error
  // } catch (err) {
  //   error.value = (err as  AuthError).message
  // }
}
</script>

<template>
  <div class="flex flex-col">
    <h2>Connexion</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="user">
      <p>Vous êtes connecté en tant que {{ user.email }}</p>
      <button @click="supabase.auth.signOut()">Se déconnecter</button>
    </div>
    <div v-else >
      <form @submit.prevent="signInWithPassword" class="flex flex-col">
        <label>
          Email
          <input type="email" v-model="email" required />
        </label>
        <label>
          Mot de passe
          <input type="password" v-model="password" required />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </div>
</template>