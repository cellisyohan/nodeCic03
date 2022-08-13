const express = require('express');
const cors = require('cors');

const app=express();
app.use(cors());

app.get('/', function(req, res){
    res.send('ola mundo')
});

app.get('/clientes', function(req, res){
    res.send('seja bem vindo')
});
app.get('/servicos', function(req,res){
    res.send('ola meu mundo')
});
app.get('/pedidos', function(req,res){
    res.send('meus pedidos')
});
app.get('/itemPedidos', function(req,res){
    res.send('itens alistados')
})

let port=process.env.PORT || 3001

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})