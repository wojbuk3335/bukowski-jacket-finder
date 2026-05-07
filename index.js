const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send("Strona główna")
})

app.get('/products/:id',(req,res)=>{
    const {id} = req.params
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
            discounted_price:'1150'
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
            discounted_price:'800'
        },
    ]
    const jacket=products.find(x=>x.id===id)
    if(jacket){
        res.send(jacket.model)
    }else{
        res.send("Nie znaleziono")
    }
})

app.use((req,res)=>{
    res.status(404).send("Nie znaleziono strony")
})

app.listen(4000)