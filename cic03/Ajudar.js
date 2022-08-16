const express = require('express');
const cors = require('cors');

const models=require('./models');

const app=express();
app.use(cors());

let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('ola mundo');
})

app.post('./pedidos', async(req, res)=>{
    await pedido.create({
        dataPedido:"07-08-2022"
    });
    res.send("pedidos completos");
});

let port=process.env.PORT || 3001

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})