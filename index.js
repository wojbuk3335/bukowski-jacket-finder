const express=require('express');
const path=require('path')

const app=express();

const port=3000

//public folder
app.use(express.static('public'))

//view engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname+'/views'));

//express-ejs-layouts
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout','./layouts/main')


//routes+controllers
app.get('/',(req,res)=>{
    res.render('pages/mainpage',{
        url:req.url
    })
})

app.get('/products',(req,res)=>{
    console.log(req.url)
    const products=[
        {
            id:'2212121221221',
            category:'kurtki-kozuchy-futra',
            sex:'damska',
            model:"Alicja",
            color:"czerwona",
            size:"2XL",
            barcode:'321413421421342131',
            price:'1190',
            discounted_price:'1150',
            image:''
        },
        {
            id:'2918127221622',
            category:'kurtki-kozuchy-futra',
            sex:'meska',
            model:"Alan",
            color:"czarny",
            size:"4XL",
            barcode:'321413421421342135',
            price:'850',
            discounted_price:'800',
            image:''
        },
    ]
    res.render('pages/products',{
        products,
        url:req.url
    })
})

app.get('/products/:id',(req,res)=>{
    const {id} = req.params
    let products=[
        {
            id:'2212121221221',
            category:'kurtki-kozuchy-futra',
            sex:'damska',
            model:"Alicja",
            color:"czerwona",
            size:"2XL",
            barcode:'321413421421342131',
            price:'1190',
            discounted_price:'1150',
            image:''
        },
        {
            id:'2918127221622',
            category:'kurtki-kozuchy-futra',
            sex:'meska',
            model:"Alan",
            color:"czarny",
            size:"4XL",
            barcode:'321413421421342135',
            price:'850',
            discounted_price:'800',
            image:''
        },
    ]
    products=products.find(x=>x.id===id)
    res.render('pages/products-finder',{
        products:products,
        url:req.url
    })
})

app.use((req,res)=>{
    res.render('./errors/404',{
        layout:'layouts/minimalistic.ejs'
    })
})

//uruchomienie serwera
app.listen(port,()=>{
    console.log(`Serwer uruchomiony na porcie ${port}`)
})