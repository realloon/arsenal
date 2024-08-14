import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const excluded = reactive([
    // 'novalaser',
    // 'lidardish',
    // 'phasecl_bomber',
    // 'od_bomblauncher',
    // 'nb_bomblauncher',
    // 'gazer_payload',
    // 'hydra_payload',
    // 'gorgon_payload',
    // 'dragon_payload',
    // 'irpulse_fighter',
    // 'pdburst_fighter',
    // 'ioncannon_fighter',
    // 'lightmortar_fighter',
    // 'targetinglaser1',
    // 'targetinglaser2',
    // 'targetinglaser3',
    // 'riftlance_minelayer',
    // 'riftbeam_minelayer',
    // 'riftcascade_minelayer',
    // 'terminator_missile',
  ])

  return { excluded }
})
