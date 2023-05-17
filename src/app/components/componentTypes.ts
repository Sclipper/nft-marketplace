export type Stat = {
  key: string
  type: 'currency' | 'number' | 'percent'
  currency?: 'eth'
  value: number
}
