export const convertNumbThousand = (x?: number): string => {
  if (!x) {
    return '0'
  }
  return x.toLocaleString('en-US')
}
