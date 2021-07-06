const renameAndCapitalize = function (value: string, index: number): string {
  if (index > 0) {
    // @ts-ignore
    const [firstChar, ...others] = value
    return firstChar?.toUpperCase() + others
  }
  return value
}

const splitedProperty = function (property: string, separator: string) {
  return property.includes(separator) ? property.split(separator) : property
}

/**
 *
 * Sanitize object properties.
 *
 * @param obj
 * @param separator
 * @returns obj
 */
export const sanitizeProperties = function (obj: Record<string, any>, separator: string = '_'): Record<string, any> {
  const properties = Object.keys(obj)

  properties.forEach((property: string) => {
    const splited = splitedProperty(property, separator)

    if (typeof splited !== 'string') {
      const formatedArray = splited.map(renameAndCapitalize).join('')
      obj[formatedArray] = obj[property]
      delete obj[property]
    }
  })

  return obj
}

export const capitalize = function (string: string | string[]): string {
  if (typeof string === 'string') {
    // @ts-ignore
    const [firstChar, ...chars] = string

    return firstChar?.toUpperCase() + chars
  }

  return string.map(renameAndCapitalize).join('')
}
