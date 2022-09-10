const express = require('express')
const app = express()
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1/workout', v1WorkoutRouter)


app.listen(PORT, () => {
  console.log(`🚀 Server listening on port: ${PORT}`)
})