import fetch from 'node-fetch'

import { Character, Data } from './interfaces.js'

export async function* characterGenerator(currentPage: string | null = 'https://swapi.dev/api/people'): AsyncGenerator<Character, void, undefined> {
  const data: Data = await (await fetch(currentPage)).json() as Data

  yield* data.results.map((character: Character) => character)

  if (data.next) {
    yield* characterGenerator(data.next)
  }
}
