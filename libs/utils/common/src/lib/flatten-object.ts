import * as _ from "lodash-es"

export interface FlattenedObject {
    [key: string]: NotObject
  }
  
export type NotObject = number | string

export function flattenObject<T>(
    ob: T,
    prefix?: string
  ): FlattenedObject {
    return flattenObjectRecursive(ob, prefix) as FlattenedObject
  }
  
  function flattenObjectRecursive<T>(
    ob: T,
    prefix?: string
  ): FlattenedObject | NotObject {
    if (!_.isObject(ob)) return ob as unknown as NotObject
  
    const toReturn: FlattenedObject = {}
  
    for (const key of Object.keys(ob)) {
      const prop = prefix ? `${prefix}.${key}` : key
      const value = ob[key]
  
      if (_.isObject(value)) {
        const flattenedValue = flattenObject(ob[key], prop)
        _.assignIn(toReturn, flattenedValue)
      } else {
        toReturn[prop] = value
      }
    }
  
    return toReturn
  }