function removeTypename(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(removeTypename)
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: any = {}
    for (const key in obj) {
      if (key !== '__typename') {
        newObj[key] = removeTypename(obj[key])
      }
    }
    return newObj
  }
  return obj
}

export function sanitizeInput<Input>(input: Input): Input {
  return removeTypename(input)
}
