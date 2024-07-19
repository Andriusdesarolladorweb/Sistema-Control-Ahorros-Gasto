const Entrada = require('../models/entrada');


module.exports ={
GetAllEntrada:(rep, res) =>{
    const entardas = Entrada.GetAll();
    res.json(entardas);

},

getEntradaId : ( req, res) =>{
 const id = parseInt(req.params.id);
 const entrada = Entrada.getById(id);
 if(entrada){
    res.json(entrada);
 }
 else{
    res.status(404).json({ error: 'Entrada no encontrada' });

 }
}

}