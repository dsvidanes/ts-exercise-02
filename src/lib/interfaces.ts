export interface Character {
  name: string
  gender: string
}

export interface Data {
  count: number
  next: string | null
  previous: string | null
  results: Character[]
}

export interface LogMessage {
  level: string
  message: string
}
