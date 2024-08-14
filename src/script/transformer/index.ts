import type { Weapon } from '@/types'
// Source
import coreCsv from '@/assets/source/Core.csv?raw'
import swpCsv from '@/assets/source/Swp.csv?raw'
import imperiumCsv from '@/assets/source/Imperium.csv?raw'
import mayasuranNavyCsv from '@/assets/source/MayasuranNavy.csv?raw'
// Helper
import parse from './helper/parse'
import preprocess from './helper/preprocess'

const core = <Array<Weapon>>parse(coreCsv)
const swp = <Array<Weapon>>parse(swpCsv)
const imperium = <Array<Weapon>>parse(imperiumCsv)
const mayasuranNavy = <Array<Weapon>>parse(mayasuranNavyCsv)

const mergedWeapons = [
  ...preprocess(core, 'Core'),
  ...preprocess(swp, 'Swp'),
  ...preprocess(imperium, 'Imperium'),
  ...preprocess(mayasuranNavy, 'MayasuranNavy'),
]

console.log(JSON.stringify(mergedWeapons))
