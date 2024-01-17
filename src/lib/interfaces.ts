type Gender = 'male' | 'female' | 'n/a' | 'hermaphrodite' | 'none'

export interface Character {
  name: string 
  height: string 
  mass: string 
  hair_color: string 
  skin_color: string 
  eye_color: string 
  birth_year: string 
  gender: Gender
  homeworld: string 
  films: string[] 
  species: string[] 
  vehicles: string[] 
  starships: string[] 
  created: string 
  edited: string 
  url: string
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
