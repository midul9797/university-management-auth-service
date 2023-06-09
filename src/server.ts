import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, successLogger } from './shared/logger'
import { Server } from 'http'
let server: Server
process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})
async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    successLogger.info('DB Connected')
    server = app.listen(config.port, () => {
      successLogger.info('Listening on port' + config.port)
    })
  } catch (error) {
    errorLogger.error('Failed to connect DB' + error)
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else process.exit(1)
  })
}
boostrap()
process.on('SIGTERM', () => {
  errorLogger.error('SIGTERM recieved')
  if (server) server.close()
})
