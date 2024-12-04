const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const path = require("path");
const app = express();

const SUPABASE_URL = "https://wmtvgjgfowixbddomhaz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtdHZnamdmb3dpeGJkZG9taGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzNDA2NjQsImV4cCI6MjA0ODkxNjY2NH0.lPoTQBR00zGzfVW-UT7esrlk293WzxnN-ucJOndBCIg";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

app.use(express.json()); // Middleware para processar JSON

/** app.post("/produtos", async function (req, res) {
    const { nome, preco } = req.body;
    const { data, error } = await supabase
        .from("produtos")
        .insert([{ nome, preco }]);

    if (error) {
        return res.status(400).send({ error: error.message });
    }
    res.status(201).send(data);
}); **/

app.get("/produtos", async function (req, res) {
    const { data, error } = await supabase
        .from("produtos")
        .select("*");

    if (error) {
        return res.status(400).send({ error: error.message });
    }
    res.status(200).send(data);
});

app.get("/produtos/:name", async function (req, res) {
    const { name } = req.params; // Obter o ID da URL
    const { data, error } = await supabase
        .from("produtos") // Nome da tabela no Supabase
        .select("*")
        .eq("name", name) // Filtrar pelo campo `id`

    if (error) {
        return res.status(400).send({ error: error.message });
    }

    if (data.length === 0) {
        return res.status(404).send({ error: "Produto não encontrado" });
    }

    res.status(200).send(data[0]); // Enviar o primeiro resultado como resposta
});

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Erro ao iniciar");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
});
