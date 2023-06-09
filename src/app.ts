import express, { Application } from 'express'
import cors from 'cors'

import { UserRoutes } from './app/modules/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users/', UserRoutes)
app.use(globalErrorHandler)
export default app
