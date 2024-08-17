import ModelsEntrada from '../models/ModelsEntrada';

// mostrar los registro 

export const getAllEntrada =  async(req, res ) =>{
   try {
    const entrada = await ModelsEntrada.findAll();
    res.json(entrada);
    
   } catch (error) {
    res.json({message : error.message})
   }
}