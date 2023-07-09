import cors from 'cors'
import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = 3000

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// for testing
app.get('/', (req: Request, res: Response) => {
  res.send(`App running on port ${port}`)
})

export default app
