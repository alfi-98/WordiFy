const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require("./Word")
const Word = mongoose.model("Word")

app.use(bodyParser.json())

mongoose.set("strictQuery", false);

const mongoURI = "mongodb+srv://alfi-98:alfi19101045@cluster0.casxshc.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURI, {
    
})

mongoose.connection.on("connected", () => {
    console.log("Connect Success")
})

mongoose.connection.on("error", (err) => {
    console.log("error", err)
})

app.post('/delete', (req, res)=>{
    console.log("got id: ", req.body._id)
    Word.findByIdAndRemove(req.body._id)
    .then(data => {
        console.log("to be deleted... ", data)
        res.send(data)
    }).catch(err => {
        console.log("error", err)
    })
})

app.post('/send-data' , (req, res) => {
    console.log(req.body.wordName)
    console.log(req.body.pronunciation)
    const word = new Word({
        wordName: req.body.wordName,
        pronunciation: req.body.pronunciation,
    })
    word.save().then(data => {
        console.log(data)
        res.send("success")
    }).catch(err => {
        console.log(err)
    })
})

app.get('/', (req, res) => {
    Word.find({})
    .then(data => {
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})



app.listen(4000, () => {
    console.log('listening on 4000')
})