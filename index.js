const mongoose = require('mongoose')

let ejs = require('ejs');

const Products = require('./model/product')

const express = require('express')


const port = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs');


app.get("/harshit", async (req, res) => {
    const products = [

        { name: 'azataj-100mg', imgurl: "https://static.wixstatic.com/media/3a148c_6c95130ffa6e45939a6c786003568119~mv2.png/v1/fill/w_407,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Azataj%20100.png", batch: "bazl2210zc", exp: "05/31/2024", mfg: '06/01/2022' },
        {
            name: 'BORTETAJ-2MG', imgurl: "https://static.wixstatic.com/media/3a148c_10b238a76ff746c78fdb6c8b356568d3~mv2.png/v1/fill/w_460,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bortetaj%202mg.png", batch: "BBZL2205Ze", exp: "05/31/2024", mfg: '06/01/2022'
        },

        {
            name: 'LENVAXEN 10 MG', imgurl: "https://static.wixstatic.com/media/3a148c_5eae76f06c4d4b1a84014be3fc195313~mv2.png/v1/fill/w_460,h_508,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Linalitaj-10.png", batch: "BLVC2202YB", exp: "05/31/2024", mfg: '06/01/2022'
        },

        {
            name: 'SORATAJ 200 MG', imgurl: "https://static.wixstatic.com/media/3a148c_b1875fcf9065404687909e2809f9ee10~mv2.png/v1/fill/w_460,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sorataj%20200-1.png", batch: "BSRT2205ZB", exp: "05/31/2024", mfg: '06/01/2022'
        },
    ]

    const productsresponse = products.forEach(async (product) => {

        await Products.create(product)
    })

    // const newproduct = { name: 'azataj-100mg', imgurl: "https://static.wixstatic.com/media/3a148c_8a2ee83814294e33b1b9adf98dc4da23~mv2.png/v1/fill/w_460,h_603,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Abirataz%20250-1.png", batch: "bazl2210zc", exp: "05/31/2024", mfg: '06/01/2022' }


    // res.render('main', { product })
    res.send('all products added')

})

app.get('/verify', async (req, res) => {
    const id = req.query.id
    const product = await Products.findById(id)
    res.render('main', { product })

})


app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://harshitjindal:foAaW8FWX9i7MDVP@sartajpharma.7bximvl.mongodb.net/?retryWrites=true&w=majority'),
        console.log('express app')
})