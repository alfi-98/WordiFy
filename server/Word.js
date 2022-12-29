const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const wordSchema = new Schema({
    wordName: {
        type: String,
        required: true
    },
    pronunciation: {
        type: String,
        required: true
    },
   
}, {timestamps: true})

module.exports =mongoose.model('Word', wordSchema)