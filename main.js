const veriable = [{
    name: 'CABONROM 20 MG', imgurl: "https://static.wixstatic.com/media/3a148c_70454914b5bd4472a4164758dbb824d4~mv2.png", batch: "BCBT2205Ze", exp: "05/31/2024", mfg: '06/01/2022'
},
{
    name: 'GEFTITAJ 250 MG', imgurl: "https://static.wixstatic.com/media/3a148c_e8d7fec2240e49b08237a4be7fd789c6~mv2.png", batch: "BT22063A", exp: "05/31/2024", mfg: '06/01/2022'
},
{ name: 'GEFTITAJ 250 MG', imgurl: "https://static.wixstatic.com/media/3a148c_e8d7fec2240e49b08237a4be7fd789c6~mv2.png", batch: "BT22064A", exp: "05/31/2024", mfg: '06/01/2022' },
{ name: 'GEFTITAJ 250 MG', imgurl: "https://static.wixstatic.com/media/3a148c_e8d7fec2240e49b08237a4be7fd789c6~mv2.png", batch: "BT22065A", exp: "05/31/2024", mfg: '06/01/2022' },
{ name: 'GEFTITAJ 250 MG', imgurl: "https://static.wixstatic.com/media/3a148c_e8d7fec2240e49b08237a4be7fd789c6~mv2.png", batch: "BT22070A", exp: "05/31/2024", mfg: '06/01/2022' },
{
    name: 'LENVAXEN 4  MG', imgurl: "https://static.wixstatic.com/media/3a148c_e1985192a1904516b6f18cf602854939~mv2.png", batch: "BLVC2206ZB", exp: "05/31/2024", mfg: '06/01/2022'
},
{
    name: 'PAZOTAJ 400 MG', imgurl: "https://static.wixstatic.com/media/3a148c_513fcdb2a54847fabe4af643f68900b6~mv2.png", batch: "BPZT2204YA", exp: "05/31/2024", mfg: '06/01/2022'
},
]




app.get("/harshit", async (req, res) => {
    const products = [

        { name: 'azataj-100mg', imgurl: "https://static.wixstatic.com/media/3a148c_6c95130ffa6e45939a6c786003568119~mv2.png/v1/fill/w_407,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Azataj%20100.png", batch: "bazl2210zc", exp: "31 MAY 2024", mfg: '01 JUNE 2022' },
        {
            name: 'BORTETAJ-2MG', imgurl: "https://static.wixstatic.com/media/3a148c_10b238a76ff746c78fdb6c8b356568d3~mv2.png/v1/fill/w_460,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bortetaj%202mg.png", batch: "BBZL2205Ze", exp: "31 MAY 2024", mfg: '01 JUNE 2022'
        },

        {
            name: 'LENVAXEN 10 MG', imgurl: "https://static.wixstatic.com/media/3a148c_4c8a2288b6904bb3862dc57e7cb6cb4c~mv2.png", batch: "BLVC2202YB", exp: "31 MAY 2024", mfg: '01 JUNE 2022'
        },

        {
            name: 'SORATAJ 200 MG', imgurl: "https://static.wixstatic.com/media/3a148c_b1875fcf9065404687909e2809f9ee10~mv2.png/v1/fill/w_460,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sorataj%20200-1.png", batch: "BSRT2205ZB", exp: "31 MAY 2024", mfg: '01 JUNE 2022'
        },
        {
            name: 'CABONROM 20 MG', imgurl: "https://static.wixstatic.com/media/3a148c_70454914b5bd4472a4164758dbb824d4~mv2.png", batch: "BCBT2205Ze", exp: "31 MAY 2024", mfg: '01 JUNE 2022'
        },
        {
            name: 'GEFTITAJ 250 MG', imgurl: "https://static.wixstatic.com/media/3a148c_e8d7fec2240e49b08237a4be7fd789c6~mv2.png", batch: "BT22063A", exp: "31 MAY 2024", mfg: '01 JUNE 2022'
        },
        { name: 'GEFTITAJ 250 MG', imgurl: "https://static.wixstatic.com/media/3a148c_e8d7fec2240e49b08237a4be7fd789c6~mv2.png", batch: "BT22064A", exp: "31 MAY 2024", mfg: '01 JUNE 2022' },
        { name: 'GEFTITAJ 250 MG', imgurl: "https://static.wixstatic.com/media/3a148c_e8d7fec2240e49b08237a4be7fd789c6~mv2.png", batch: "BT22065A", exp: "31 MAY 2024", mfg: '01 JUNE 2022' },
        { name: 'GEFTITAJ 250 MG', imgurl: "https://static.wixstatic.com/media/3a148c_e8d7fec2240e49b08237a4be7fd789c6~mv2.png", batch: "BT22070A", exp: "31 MAY 2024", mfg: '01 JUNE 2022' },
        {
            name: 'LENVAXEN 4  MG', imgurl: "https://static.wixstatic.com/media/3a148c_e1985192a1904516b6f18cf602854939~mv2.png", batch: "BLVC2206ZB", exp: "31 MAY 2024", mfg: '01 JUNE 2022'
        },
        {
            name: 'PAZOTAJ 400 MG', imgurl: "https://static.wixstatic.com/media/3a148c_513fcdb2a54847fabe4af643f68900b6~mv2.png", batch: "BPZT2204YA", exp: "31 MAY 2024", mfg: '01 JUNE 2022'
        },
    ]

    const productsresponse = products.forEach(async (product) => {

        await Products.create(product)
    })

    // const newproduct = { name: 'azataj-100mg', imgurl: "https://static.wixstatic.com/media/3a148c_8a2ee83814294e33b1b9adf98dc4da23~mv2.png/v1/fill/w_460,h_603,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Abirataz%20250-1.png", batch: "bazl2210zc", exp: "31 MAY 2024", mfg: '01 JUNE 2022' }


    // res.render('main', { product })
    res.send('all products added')

})
