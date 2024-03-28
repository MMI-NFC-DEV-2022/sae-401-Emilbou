<template>
  <div class="flex">
    <div>
      <h1>{{ FilmsData.nom_film }}</h1>
      <img :src="FilmsData.affiche_film" alt="" />
    </div>
    <button @click="generatePDF">Générer PDF</button>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/supabase'
import { ref, onMounted } from 'vue'
import jsPDF from 'jspdf'

const generatePDF = () => {
  const doc = new jsPDF()
  doc.text(`${FilmsData.nom_film}`, 10, 10)
  doc.save('example.pdf')
}

const Film = ref({})
const props = defineProps<{
  id_Films: string
}>()
const { data: FilmsData, error } = await supabase
  .from('Films')
  .select('*')
  .eq('id', props.id_Films)
  .single()
console.log(FilmsData)
console.log(error)
</script>
