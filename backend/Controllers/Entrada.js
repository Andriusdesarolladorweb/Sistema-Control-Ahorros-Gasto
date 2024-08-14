import  createConnection from '../DB/conexion.js'

 const mostardatos = ()=>{

 const cn = new createConnection();

try {
    const consulta =  new cn.execute('Select from * Entrada');
    return consulta
} catch (error) {
    
    console.error('Error en la consulta:', error.message);
    throw error;
}

}

export default mostardatos();