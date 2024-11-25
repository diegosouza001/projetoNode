const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site");
})

app.get("/produtos", function(req,res){
    const filePath = path.join(__dirname, "produtos.html");
    res.sendFile(filePath);
})

console.log("Hello World");

app.get("/sobre", function(req,res){
    const filePath = path.join(__dirname, "sobre.html");
    res.sendFile(filePath);
})

app.get("/produtos/camisas", function(req,res){
    const filePath = path.join(__dirname, "camisas.html");
    res.sendFile(filePath);
})

app.get("/produtos/calcas", function(req,res){
    const filePath = path.join(__dirname, "calcas.html");
    res.sendFile(filePath);
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