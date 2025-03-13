export function camelCase(input: string): string {
  if (!input) return '';
  
  // Replace any non-alphanumeric characters with spaces
  let result = input.replace(/[^a-zA-Z0-9]/g, ' ');
  
  // Split by space and capitalize each word except first
  result = result.split(' ')
    .filter(word => word.length > 0)
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
  
  return result;
}
