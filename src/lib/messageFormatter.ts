import { Transform, TransformCallback } from 'node:stream'

import { Character, LogMessage } from './interfaces.js'

export const messageFormatter = new Transform({
  objectMode: true,
  transform(character: Character, encoding: BufferEncoding, callback: TransformCallback): void {
    this.push({
      level: 'info',
      message: character.name,
    } as LogMessage)

    callback()
  },
})
