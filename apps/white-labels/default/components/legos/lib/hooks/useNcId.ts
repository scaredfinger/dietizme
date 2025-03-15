import { useId } from 'react'

export function useNcId(pre = 'nc'): string {
  const id = useId()
  return `${pre}_${id.replace(/:/g, '_')}`
}
