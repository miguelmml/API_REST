const express = require('express')
const app = express()
const v1FooRouter = require('./v1/routes/fooRoutes')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1/foo', v1FooRouter)


app.listen(PORT, () => {
  console.log(`🚀 Server listening on port: ${PORT}`)
})