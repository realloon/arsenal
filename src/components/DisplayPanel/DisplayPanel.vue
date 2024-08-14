<script setup lang="ts">
// Components
import WeaponItem from './components/WeaponItem'
// Helper
import filterByType from './helper/filterByType'
// Store
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore()

const headers = ['射程', '动能', '高爆', '能量', '碎片']
const damageTypes = ['KINETIC', 'HIGH_EXPLOSIVE', 'ENERGY', 'FRAGMENTATION']
</script>

<template>
  <article>
    <header class="row">
      <span v-for="header in headers" class="col">{{ header }}</span>
    </header>

    <main>
      <section class="row" v-for="[range, row] in dataStore.tabularWeapons">
        <span class="col">{{ range }}</span>

        <div v-for="damageType in damageTypes" class="col">
          <div v-for="weapon in filterByType(row, damageType)">
            <weapon-item :weapon="weapon" />
          </div>
        </div>
      </section>
    </main>
  </article>
</template>

<style scoped>
article {
  --range-width: 4em;
  --x-gap: 1em;
  --y-padding: 4px;
  font-family: monospace, 'LXGW WenKai';
  border-top: 2px solid black;
  padding: var(--y-padding) 0;
}

header {
  padding-bottom: var(--y-padding);
  border-bottom: 1px solid black;
}

main {
  display: flex;
  flex-direction: column;
  padding-top: var(--y-padding);
  border-bottom: 2px solid black;

  .row:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
}

footer {
  text-align: right;
}

.row {
  display: flex;
  gap: var(--x-gap);
  padding: 8px 0;
  transition: 0.2s;

  .col {
    flex-basis: 20px;
    flex-shrink: 0;

    &:first-child {
      flex-basis: var(--range-width);
      text-align: center;
    }

    &:not(:first-child) {
      flex-basis: calc((100% - var(--range-width) - (var(--x-gap) * 4)) / 4);
    }
  }
}
</style>
