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

//listar todos os clientes

app.get('/clientes', async(req, res)=>{
    await cliente.findAll()
    .then(ccli=>{
        return res.json({
            error:false,
            ccli
        });
    }).catch(erro=>{
        return res.status(400).json({
            error:true,
            message:" problema na conexão"
        });
    });
});

// listar pedido por clientes

app.get('/clientes-pedidos', async(req, res)=>{
    await cliente.findAll({include : [{all : true}]})
      .then(pcli=>{
        return res.json({
            error:false,
            pcli
        });
      }).catch(erro=>{
        return res.status(400).json({
            error:true,
            message:" problema na na pesquisa"
        });
    });
});

// listar pedidos de UM cliente

app.get('/clientes/:id/pedidos', async(req,res)=>{
    await pedido.findAll({
        where: {ClienteId:req.params.id}
    }).then(pedidos=>{
        return res.json({
            error:false,
            pedidos
        });
      }).catch(erro=>{
        return res.status(400).json({
            error:true,
            message:" problema na conexão com a API."
        });
    });
});

//listar um pedido

app.get('/pedido/:id', async(req,res)=>{
    await pedido.findByPk (req.params.id)
    .then(ped=>{
        return res.json({
            error:false,
            ped
        });
      }).catch(erro=>{
        return res.status(400).json({
            error:true,
            message:" problema na conexão com a API."
        });
    });
});

// fazer alteração no pedido

app.put('/pedido/:id', async(req,res)=>{
    const pedi={
        id: req.params.id,
        ClienteId: req.body.ClienteId,
        data: req.body.data
    }
    if(! await cliente.findByPk(req.body.ClienteId)){
        return res.status(400).json({
            error: true,
            message: "Cliente não existe."
        }); 
    };
    await pedido.update(pedi,{
        where: Sequelize.and({ClienteId : req.body.ClienteId})
    }).then(umped=>{
        return res.json({
            error:false,
            message :"Pedido atualizado com sucesso!",
            umped
        });
      }).catch(erro=>{
        return res.status(400).json({
            error:true,
            message:" problema na conexão com a API."
        });
    });
});