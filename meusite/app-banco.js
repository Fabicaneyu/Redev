var desenvolvimento = false;

var configuracoes = {
    producao: {
        server: "01191065.database.windows.net",
        user: "fabi_canedo",
        password: "Mavibifa2019",
        database: "fabi_canedo",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
           
        }
    },
    desenvolvimento: {
        server: "01191065.database.windows.net",
        user: "fabi_canedo",
        password: "Mavibifa2019",
        database: "fabi_canedo",
        options: {
            encrypt: true
        }
    }
}
 
var sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
  return sql.connect(configuracoes[perfil])
  // return new sql.ConnectionPool();  
} 

module.exports = {
    conectar: conectar,
    sql: sql
}