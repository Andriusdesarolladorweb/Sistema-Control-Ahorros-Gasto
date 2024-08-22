
import ModelsEntrada from '../models/ModelsEntrada.js';

// mostrar los registro 

export const getAllEntradas =  async(req, res ) =>{
   try {
    const entradas = await ModelsEntrada.findAll();
    res.json(entradas);
    
   } catch (error) {
    res.json({message : error.message})
   }
}

export const getEntrada =  async(req, res ) =>{
   try {
    const entrada = await ModelsEntrada.findAll({
      where:{id:req.params.id}
   })
   res.json(entrada[0])
    
   } catch (error) {
    res.json({message : error.message})
   }
}


export const createEntrada =  async(req, res ) =>{
   try {
    await ModelsEntrada.create(req.body)
 
   res.json({
      "message":"Registro correcto"
   })
    
   } catch (error) {
    res.json({message : error.message})
   }
}