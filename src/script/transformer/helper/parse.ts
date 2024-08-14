export default function xmlParse(csv: string) {
  const [parms, ...rest] = csv.split('\r\n').map(parseLine)

  return rest.map(item => {
    const struct: { [_: string]: string } = {}
    item.forEach((value, index) => {
      struct[parms[index]] = value
    })
    return struct
  })
}

function parseLine(line: string): string[] {
  const result: Array<string> = []
  let currentField: Array<string> = []
  let insideQuotes = false

  let i = 0

  while (i < line.length) {
    const char = line[i]

    if (insideQuotes) {
      if (char === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          currentField.push('"')
          i++ // skip next quotation.
        } else {
          insideQuotes = false
        }
      } else {
        currentField.push(char)
      }
    } else {
      if (char === '"') {
        insideQuotes = true
      } else if (char === ',') {
        result.push(currentField.join(''))
        currentField = []
      } else {
        currentField.push(char)
      }
    }

    i++
  }

  result.push(currentField.join(''))

  return result
}
