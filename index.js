const express = require('express')
const app = express()

app.use('/promises-example-1', require('./src/routes/promises/promises-example-1'))
app.use('/promises-space-x', require('./src/routes/promises/promises-space-x-example'))

app.use('/async-await-example-1', require('./src/routes/async-await/async-await-example-1'))
app.use('/async-await-space-x', require('./src/routes/async-await/async-await-space-x-example'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
