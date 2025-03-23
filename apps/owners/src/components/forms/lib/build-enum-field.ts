import { JSONSchema7Type, JSONSchema7TypeName } from "json-schema"

interface EnumValue<Enum> {
  value: Enum
  label: string
}

interface Params<Enum> {
  title: string
  enumValues: EnumValue<Enum>[]
}

export function buildEnumFields<Enum>({ title, enumValues }: Params<Enum>) {
  return {        
    type: 'string' as JSONSchema7TypeName,
    title,
    enum: enumValues.map((v) => v.value),
    enumNames: enumValues.map((v) => v.label),
  }
}