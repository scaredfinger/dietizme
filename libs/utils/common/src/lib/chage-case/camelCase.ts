export function camelCase(input: string): string {
  if (!input) return '';
  
  // If input is already camelCase, return it as is
  if (isCamelCase(input)) {
    return input;
  }
  
  // For PascalCase: convert to camelCase directly
  if (isPascalCase(input)) {
    return input.charAt(0).toLowerCase() + input.slice(1);
  }
  
  // Split the input into words
  const words: string[] = [];
  
  // First split by non-alphanumeric characters
  const parts = input.split(/[^a-zA-Z0-9]+/).filter(part => part.length > 0);
  
  // Process each part
  for (const part of parts) {
    // If the part is all uppercase or all lowercase, treat it as a single word
    if (part === part.toUpperCase() || part === part.toLowerCase()) {
      words.push(part.toLowerCase());
    } else {
      // For mixed case parts, split by capital letters and lowercase everything
      let word = '';
      for (let i = 0; i < part.length; i++) {
        const char = part[i];
        if (i > 0 && /[A-Z]/.test(char)) {
          words.push(word.toLowerCase());
          word = char;
        } else {
          word += char;
        }
      }
      if (word.length > 0) {
        words.push(word.toLowerCase());
      }
    }
  }
  
  // Capitalize all words except the first one
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Helper function to detect if a string is already in camelCase
function isCamelCase(str: string): boolean {
  // camelCase: first char is lowercase, contains at least one uppercase,
  // no non-alphanumeric chars, doesn't start with a number
  return /^[a-z][a-zA-Z0-9]*$/.test(str) && 
         /[A-Z]/.test(str) &&
         !/[^a-zA-Z0-9]/.test(str);
}

// Helper function to detect if a string is in PascalCase
function isPascalCase(str: string): boolean {
  // PascalCase: first char is uppercase, no spaces or special characters
  return /^[A-Z][a-zA-Z0-9]*$/.test(str) && 
         !/[^a-zA-Z0-9]/.test(str) && 
         /[a-z]/.test(str);  // Must contain at least one lowercase
}
