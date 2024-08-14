import type { Weapon } from '@/types'

export default function filterByType(
  array: Array<[string, Weapon[]]>,
  query: string
) {
  const finded = array.find(([type]) => type === query)
  return finded
    ? finded[1].sort((a, b) => Number(b.OPs) - Number(a.OPs))
    : undefined
}
