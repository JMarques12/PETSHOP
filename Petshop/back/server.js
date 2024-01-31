//Dependências - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyparser = require("body-parser");

//Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'petshop'
});

//Rota de teste
const teste = (req, res) => {
    res.send("Back-end respondendo ");
}

//CRUD - create
const create = (req, res) => {
    let nome = req.query.nome;
    let raca = req.query.raca;
    let nascimento = req.query.nascimento;
    
    let query = `INSERT INTO pets(nome, raca, nascimento) VALUE`;
    query += `( '${nome}','${raca}', '${nascimento}');`;
    con.query(query,(err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM pets",(err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extende: true }));

//Rotas de Saída - FrontEnd
app.get("/", teste);
app.post("/pets", create);
app.get("/pets", read);

//Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});