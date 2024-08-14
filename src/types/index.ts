export type Weapon = {
  name: string
  id: string
  tier: string
  rarity: string
  'base value': string
  range: string
  'damage/second': string
  'damage/shot': string
  emp: string
  impact: string
  'turn rate': string
  OPs: string
  ammo: string
  'ammo/sec': string
  'reload size': string
  type: string
  'energy/shot': string
  'energy/second': string
  chargeup: string
  chargedown: string
  'burst size': string
  'burst delay': string
  'min spread': string
  'max spread': string
  'spread/shot': string
  'spread decay/sec': string
  'beam speed': string
  'proj speed': string
  'launch speed': string
  'flight time': string
  'proj hitpoints': string
  autofireAccBonus: string
  extraArcForAI: string
  hints: string
  tags: string
  groupTag: string
  'tech/manufacturer': string
  'for weapon tooltip>>': string
  primaryRoleStr: string
  speedStr: string
  trackingStr: string
  turnRateStr: string
  accuracyStr: string
  customPrimary: string
  customPrimaryHL: string
  customAncillary: string
  customAncillaryHL: string
  noDPSInTooltip: string
  number: string
  provider?: string
}

export type TabularWeapons = Array<[string, Array<[string, Array<Weapon>]>]>
