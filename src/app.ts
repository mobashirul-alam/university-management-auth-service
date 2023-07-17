import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import ApiError from './errors/ApiError'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()
const port = 3000

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', UserRoutes)

// for testing
app.get('/', (req: Request, res: Response) => {
  res.send(`App running on port ${port}`)
  throw new ApiError(400, 'Wow! Error is Here!!')
})

// global error handler
app.use(globalErrorHandler)

export default app
