// //https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66
//https://medium.com/@dannibla/connecting-nodejs-postgresql-f8967b9f5932    funcionou
 //https://docs.microsoft.com/pt-br/azure/postgresql/connect-nodejs

// //insomnia

const { Client } = require('pg')
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: 'admin',
  database: 'dump_db',
})

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    // console.log('connected')
    queryDatabaseSelect();
    queryDatabaseInsert();
  }
});

function queryDatabaseSelect(){

    const query = 'SELECT * FROM client_tb;';

    client.query(query).then(res => {
        const rows = res.rows;
        console.log(rows[0]);

        for (var i = 0; i < rows.length; i ++) {
            var cpf = rows[i].cpf;
            var firstname = rows[i].firstname;
            var lastname = rows[i].lastname;
            
            console.log('CPF: ' + cpf + ", Nome: " + firstname + " " + lastname);
        }

    }).catch(err => {
        console.log(err);
    });
};

function queryDatabaseInsert(){

    const query = `INSERT INTO equipment_tb VALUES ('7742256576626', '00000000003', 'tv', 'SONY', '41205079', 'liga e depois se desliga', ' ', 'não veio com o controle');`;

    client.query(query).then(() => {
            console.log('INSERT INTO equipment_tb');
        }).catch(err => {
            console.log('Erro ao inserir');
            // console.log(err)
        })
        .then(() => {
            console.log('Inserido Com Sucesso!!!');
            process.exit();
        });
};
