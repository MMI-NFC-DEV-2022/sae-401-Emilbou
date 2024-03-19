<script setup lang="ts">
import type { FilmsType } from '@/types';

defineProps<FilmsType>()
</script>

<template>
<h1>
{{ nom_film }}
</h1>
<h1>
{{ duree_film }}
</h1>
<h1>
{{ date_film }}
</h1>
<h1>
{{ description_film }}
</h1>
<img :src="affiche_film" alt="">

</template>