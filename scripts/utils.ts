export function normalizeKey(key: string) {
  return key.replace(/[«»]/g, '')
}
