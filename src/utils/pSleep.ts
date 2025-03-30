export default async function pSleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
