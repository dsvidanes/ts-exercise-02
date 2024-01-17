import { Transform, TransformCallback } from 'node:stream'

import { Character } from './interfaces.js'

export const characterFilter = new Transform({
  objectMode: true,
  transform(character: Character, encoding: BufferEncoding, callback: TransformCallback): void {
    if (character.gender === 'female') {
      this.push(character)
    }

    callback()
  },
})
