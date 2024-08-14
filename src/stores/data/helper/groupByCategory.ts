export default function groupByCategory<
  T extends Record<K, PropertyKey>,
  K extends keyof T
>(items: Array<T>, category: K): Record<string, Array<T>> {
  return items.reduce((groups, item) => {
    const key = String(item[category])
    const group = groups[key] || []
    group.push(item)
    groups[key] = group
    return groups
  }, {} as Record<string, T[]>)
}
