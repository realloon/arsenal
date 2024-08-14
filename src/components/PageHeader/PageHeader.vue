<script setup lang="ts">
// Store
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore()
const modsCopy = dataStore.selectedMods
</script>

<template>
  <header>
    <h1>ARSENAl</h1>

    <p>Range is crucial. Yet, range is not everything.</p>

    <div class="wrapper">
      <form>
        <label v-for="mod in modsCopy">
          <span>{{ mod }}</span>
          <input
            type="checkbox"
            name="mod"
            :value="mod"
            v-model="dataStore.selectedMods"
          />
        </label>
      </form>
      <span>Amount: {{ dataStore.amount }}</span>
    </div>
  </header>
</template>

<style scoped>
h1 {
  line-height: 1;
  font-size: 2rem;
  margin: 1.5rem 0 0.5rem;
}

p {
  font-family: ui-serif, serif;
  line-height: 1;
  margin: 0;
}

.wrapper {
  display: flex;
  align-items: baseline;
  margin: 0.25rem 0;
  justify-content: space-between;

  form {
    display: flex;
    gap: 0.5rem;

    label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }
  }
}
</style>
