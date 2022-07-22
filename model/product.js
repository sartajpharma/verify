const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    name: String,
    imgurl: String,
    batch: String,
    mfg: Date,
    exp: Date
})

const product = mongoose.model('Products', ProductSchema)

module.exports = product