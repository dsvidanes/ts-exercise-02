import { pipeline, Readable } from 'node:stream'

import winston from 'winston'

import { characterGenerator } from './lib/characterGenerator.js'
import { characterFilter } from './lib/characterFilter.js'
import { messageFormatter } from './lib/messageFormatter.js'

const logger: winston.Logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})

pipeline(
  Readable.from(characterGenerator()),
  characterFilter,
  messageFormatter,
  logger,
  (error: Error | null): void => {
    if (error) {
      console.error(error)
    }
  }
)
