export function sluggify(text: string): string {
  // Replace specific German, Spanish, and French characters
  const replacements: { [key: string]: string } = {
    ä: 'a',
    ö: 'o',
    ü: 'u',
    ß: 'ss', // German
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    ñ: 'n', // Spanish
    ç: 'c',
    à: 'a',
    è: 'e',
    ì: 'i',
    ò: 'o',
    ù: 'u', // French
    â: 'a',
    ê: 'e',
    î: 'i',
    ô: 'o',
    û: 'u', // More French
    ë: 'e',
    ï: 'i',
    ÿ: 'y', // Additional French
  }

  // Function to replace characters based on the mappings above
  let slug = text.toLowerCase()
  Object.keys(replacements).forEach((key) => {
    const value = replacements[key]
    slug = slug.replace(new RegExp(key, 'g'), value)
  })

  // Replace all non-alphanumeric characters with hyphens and remove duplicate hyphens
  slug = slug.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

  return slug
}

export function sluggifyObject(
  obj: Record<string, string>,
): Record<string, string> {
  const result = {
    ...obj,
  }

  for (const key in obj) {
    result[key] = sluggify(obj[key])
  }

  return result
}
