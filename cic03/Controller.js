const express = require('express');
const cors = require('cors');
const {Sequelize} = require('./models');
const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let pedido=models.Pedido;

let port = process.env.PORT || 3001

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: '+' http://localhost:3001');
});
app.get('/', function(req,res){
    res.send('bem vindo a TI academy Brasil');
});
//inserir um novo cliente
app.post('/cliente', async(req,res)=>{
    await cliente.create(
        req.body
    ).then(cli =>{
        return res.json({
            error: false,
            message: 'Cliente inserido com sucesso',
            cli
        });
    }).catch(erro=>{
        return res.status(400).json({
            error:true,
            message:"Problema de conexão"
        });
    });
});

//inserindo pedido
app.post('/cliente/:id/pedido', async(req,res)=>{
    const ped = {
        data:req.body.data,
        ClienteId:req.params.id
    };
    if(! await cliente.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: "Cliente não existe."
        });
    };
    await pedido.create(ped)
    .then(pedcli=>{
        return res.json({
            error:false,
            message:"Pedido criado ",
            pedcli
        });
    }).catch(erro=>{
        return res.status(400).json({
            error:true,
            message:" problema na conexão"
        });
    });
});