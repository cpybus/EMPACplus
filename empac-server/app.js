const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(methodOverride())

mongoose.connect('mongodb://localhost/empacplus')

restify.serve(router, mongoose.model('Events', new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date }
})))

app.use(router)

app.listen(3000, () => {
  console.log('Express server listening on port 3000')
})
