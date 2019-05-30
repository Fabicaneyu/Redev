// não mexa nestas 3 linhas!
var express = require('express');
var router = express.Router();
var banco = require('../app-banco');
// não mexa nestas 3 linhas!

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/registrar',(req,res,next)=>{
  banco.conectar().then(()=>{
    console.log(`Chegou para registro: ${JSON.stringify(req.body)}`);

    var nome = req.body.nombre;
    var tipo = req.body.type;
    var data = req.body.date;
    var hora = req.body.hour;
    var endereco = req.body.adress;

    var vetordata= data.split("/");
    var datainsert=  `CONVERT(datetime, '${data}', 103)`;
    //${vetordata[2]}-${vetordata[1]}-${vetordata[0]}
    
    var isql = `INSERT INTO Cadastro (nome_atividade,tipo_atividade,data_atividade,hora_atividade,endereco_atividade) values 
    ('${nome}','${tipo}',${datainsert},'${hora}','${endereco}')`
    
    console.log(isql);

    return banco.sql.query(isql);
  }).then(()=>{
    res.send(200);
  }).catch(err=>{
    console.log(err);
  }).finally(()=>{
    banco.sql.close();
  })
});

router.post('/entrar',(req,res,next)=>{
  banco.conectar().then(()=>{
    console.log(`Chegou para registro: ${JSON.stringify(req.body)}`);

    // Dados do formulário do organizador
    //var email = req.body.email;
    //var senha = req.body.senha;

   // return banco.sql.query(`SELECT * FROM cadastromingardi where email = '${email}' and senha ='${senha}'`);
  //}).then((consulta)=>{
    //console.log(consulta.recordset);
   // if(consulta.recordset.length == 1){
      //res.send(consulta.recordset[0]);
    //}else{
      //res.sendStatus(404);
    //}
 //}).catch(err=>{
   // console.log(err);
  //}).finally(()=>{
    //banco.sql.close();
  //})
});
});

module.exports = router;