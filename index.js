const mongoose = require('mongoose')

let ejs = require('ejs');

const Products = require('./model/product')

const express = require('express')


const port = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs');



app.get('/verify', async (req, res) => {
    const id = req.query.id
    const product = await Products.findById(id)
    res.render('main', { product })

})


app.use('/', (req, res) => {
    res.redirect('https://www.sartajpharma.com')
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://harshitjindal:foAaW8FWX9i7MDVP@sartajpharma.7bximvl.mongodb.net/?retryWrites=true&w=majority'),
        console.log('express app')
})