import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.route'

const app: Application = express()
const port = 3000

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', usersRouter)

// for testing
app.get('/', (req: Request, res: Response) => {
  res.send(`App running on port ${port}`)
})

export default app
