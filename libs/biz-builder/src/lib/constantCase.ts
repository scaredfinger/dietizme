export function constantCase(methodName: string) {
  return methodName.replace(/([a-z0-9])([^a-z0-9])/g, '$1_$2').toUpperCase();
}
