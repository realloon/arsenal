<script setup lang="ts">
import type { Weapon } from '@/types'
defineProps<{
  weapon: Weapon
}>()
</script>

<template>
  <div @click="console.log(weapon)">
    <span>{{ weapon.name }}</span>
  </div>
</template>

<style scoped></style>
