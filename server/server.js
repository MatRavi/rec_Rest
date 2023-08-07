const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
      host:"localhost",
      user:"root",
      password:"",
      database:"dbdelivery",
})


app.get("/loginCli", (req,res) => {
    const {emailCli, senhaCli} = req.query;
    const sqlLog = `SELECT * FROM tbcliente where email = ${emailCli} and senha = ${senhaCli}`;
    
    db.query(sqlLog, [emailCli, senhaCli], (err,result) => {
      if(err) res.json(err);
      else res.send(result); console.log(result+" "+result.nome+" "+result.codcli)
    })
})

app.get("/pesquisaCard/:pesq", (req,res) => {
    const sqlSelect = "SELECT * FROM tbproduto where tipo = ?";
    const {pesq}=req.params;
    db.query(sqlSelect, [pesq], (err,result) => {
      if(err) res.json(err)
      else res.send(result);
    })
})

app.get("/pesquisaRS", (req,res) => {
    const sqlSelect = "SELECT * FROM tbcliente where email = ? and cpf = ?";
    const { cpf, email } = req.query;
    db.query(sqlSelect, [email, cpf], (err,result) => {
      if(err) res.json(err);
      else res.send(result);
    });
});

app.put('/alteraRS/:senha', (req, res) => {
  const { senha } = req.params;
  const { cpf, email } = req.body;
  let sqlUpdate = "UPDATE tbcliente SET senha = ? WHERE cpf = ? and email = ?";

  db.query(sqlUpdate, [ senha, cpf, email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    return res.status(200).json(result);
  });
});

app.listen(3001, () => {
    console.log("rodando servidor")
})