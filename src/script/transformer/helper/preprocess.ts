import type { Weapon } from '@/types'

export default function preprocess(weapons: Array<Weapon>, provider: string) {
  return weapons
    .filter(weapon => weapon.type && !weapon.hints.includes('SYSTEM'))
    .map(weapon => {
      weapon.provider = provider
      return weapon
    })
}
