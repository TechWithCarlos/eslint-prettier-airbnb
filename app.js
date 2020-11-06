import express from 'express'
import dotenv from 'dotenv'
import { carlos } from './carlos.js'

// console.log('carlos')

// Initialize express
const app = express()

// Initialize environment variables
dotenv.config()

// Initialize starting port
const PORT = process.env.PORT || 5000

// Initialize entry route
app.get('/', (req, res) => {
  res.send('Application Init!')
  process.exit(1)
})

// Start Application
app.listen(PORT, () => {
  console.log(`App läuft auf: http://localhost:${PORT}`)
})

console.log(carlos('Daniel'))
