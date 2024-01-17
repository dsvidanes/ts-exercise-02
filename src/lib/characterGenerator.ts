import fetch from 'node-fetch'
import { Character, Data } from './interfaces.js'

export default async function* characterGenerator(currentPage: string | null = 'https://swapi.dev/api/people'): AsyncGenerator<Character, void, undefined> {
  const data = await (await fetch(currentPage)).json() as Data

  yield* data.results.map(({ name, gender }) => ({ name, gender }))

  if (data.next) {
    yield* characterGenerator(data.next)
  }
}
