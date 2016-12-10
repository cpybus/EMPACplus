const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const app = express()
const router = express.Router()

app.use(bodyParser.json())
// app.use(methodOverride())

mongoose.connect('mongodb://localhost/empacplus')

restify.serve(router, mongoose.model('Clients', new mongoose.Schema({
  name: { type: String },
  event: { type: mongoose.Schema.Types.ObjectId }
})))

restify.serve(router, mongoose.model('Events', new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date },
  clients: [{ type: mongoose.Schema.Types.ObjectId }]
})))

app.use(router)

app.listen(3000, function () {
  console.log('Express server listening on port 3000')
})
