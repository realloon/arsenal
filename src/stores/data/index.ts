import type { Weapon, TabularWeapons } from '@/types'
import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
// Source
import json from '@/assets/json/data.json?raw'
// Helper
import groupByCategory from './helper/groupByCategory'

export const useDataStore = defineStore('data', () => {
  const selectedMods = ref(['Core', 'Swp', 'Imperium', 'MayasuranNavy'])
  const weapons = reactive<Array<Weapon>>(JSON.parse(json))

  const tabularWeapons = computed<TabularWeapons>(() =>
    Object.entries(
      groupByCategory(
        weapons.filter(weapon =>
          selectedMods.value.includes(<string>weapon.provider)
        ),
        'range'
      )
    )
      .sort(([a], [b]) => Number(b) - Number(a)) // by range.
      .map(([range, items]) => [
        range,
        Object.entries(groupByCategory(items, 'type')),
      ])
  )

  const amount = computed(
    () =>
      tabularWeapons.value.flat(4).filter(item => typeof item !== 'string')
        .length
  )

  return { selectedMods, tabularWeapons, amount }
})
