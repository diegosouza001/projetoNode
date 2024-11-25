const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site");
})

app.get("/produtos", function(req,res){
    res.send("<h1>Lista de produtos<h1>");
})

app.get("/sobre", function(req,res){
    res.send("<h1>Loja fundada em 2023<h1>")
})

app.get("/produtos/camisas", function(req,res){
    res.send("<h1>Camisas<h1>")
})

app.get("/consulta/:parametro", function(req,res){
    res.send("retorno consulta:" + req.params.parametro);
})

app.listen(4000,function(erro){
    if (erro){
        console.log("Erro ao iniciar")
    } else {
        console.log("Servidor inciado com sucesso");
    }
})