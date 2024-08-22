import ModelsEntrada from "../models/ModelsEntrada.js";

// mostrar los registro

export const getAllEntradas = async (req, res) => {
  try {
    const entradas = await ModelsEntrada.findAll();
    res.json(entradas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Buscar registro
export const getEntrada = async (req, res) => {
  try {
    const entrada = await ModelsEntrada.findAll({
      where: { id: req.params.id },
    });
    res.json(entrada[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Insertar resgistro
export const createEntrada = async (req, res) => {
  try {
    await ModelsEntrada.create(req.body);

    res.json({
      message: "Registro correcto",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};


export const updatedEntrada = async (req, res) => {
   try {
     await ModelsEntrada.update(req.body, {
      where: { id: req.params.id }
     });
 
     res.json({
       message: "Actualizado correctamente",
     });
   } catch (error) {
     res.json({ message: error.message });
   }
 };



 export const deleteEntrada = async (req, res) => {
   try {
     await ModelsEntrada.destroy( {
      where: { id: req.params.id }
     });
 
     res.json({
       message: "ELiminado correctamente",
     });
   } catch (error) {
     res.json({ message: error.message });
   }
 };
