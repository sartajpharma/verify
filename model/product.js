const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    name: String,
    imgurl: String,
    batch: String,
    mfg: String,
    exp: String,
})

const product = mongoose.model('Products', ProductSchema)

module.exports = product