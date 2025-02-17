const mongoose = require('mongoose')

const estudioSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  },
  senha: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('estudio', estudioSchema)