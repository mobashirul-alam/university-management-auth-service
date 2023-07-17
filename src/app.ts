import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()
// const port = 3000

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', UserRoutes)

// for testing
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // res.send(`App running on port ${port}`)
  // throw new ApiError(400, 'Wow! Error is Here!!')
  next(Promise.reject(new Error('Unhandled promise rejected')))
})

// global error handler
app.use(globalErrorHandler)

export default app
