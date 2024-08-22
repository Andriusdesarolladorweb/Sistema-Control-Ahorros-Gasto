
import {Sequelize} from 'sequelize';

const db = new Sequelize('sistema_control_ahorros_gasto', 'root', '', {
  host:'localhost', 
  dialect:'mysql' }  );

  export default db;


// Cree la conexión a la base de datos
/*async function createConnection() {
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '', 
  database: 'sistema_control_ahorros_gasto' 
});

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos como id ' + connection.threadId);
});


connection.end();
}

export default createConnection();
*/