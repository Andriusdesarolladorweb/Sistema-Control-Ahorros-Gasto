import "../css/CrudEntradas.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import imgEliminar from "../img/borrar.png";
import { get } from "fast-levenshtein";
const url = "http://localhost:3006/Entradas/";

const MostrarEntradas = () => {
  const [entradas, setEntrada] = useState([]);
  useEffect(() => {
    getEntradas();
  }, []);

  // mostrar datos
  const getEntradas = async () => {
    try {
      const res = await axios.get(url);
      if (Array.isArray(res.data)) {
        setEntrada(res.data);
      } else {
        console.error("Error: La respuesta no es un array", res.data);
        toast.error(
          "Error al cargar las entradas. Formato de datos incorrecto."
        );
      }
    } catch (error) {
      console.error("Error al obtener las entradas:", error);
      toast.error("Error al cargar las entradas.");
    }
  }

    //eliminar registro 
    const deleteEntrada = async (id)=> {
      await axios.delete(`${url}${id}`)
      getEntradas()
    }

    


  return (
    <div>
      <ToastContainer />
      <div className="container-primary d-flex  p-5">
        <div className="Container-formulario">
          <form className="Formulario bg-white text-black">
            <div className="Container-titulo bg-primary">
              <h4 className="text-center text-white">Registro De Entradas</h4>
            </div>
            <div className="container">
              <div className="mb-3">
                <label htmlFor="Monto" className="form-label">
                  Monto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Monto"
                  name="Monto"
                  onChange={(event) => {}}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="Fecha" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="Fecha"
                  name="Fecha"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Concepto" className="form-label">
                  Concepto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Concepto"
                  name="Concepto"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary submit-btn text-center d-flex m-auto"
                onClick={getEntradas}
              >
                Registar
              </button>
              <br />
            </div>
          </form>
        </div>
        <div className="container-table">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Concepto</th>
                <th className="text-center">Editar</th>
                <th className="text-center">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {entradas.map((entrada) => (
                <tr key={entrada.id}>
                  <td>{entrada.id}</td>
                  <td>{entrada.Monto}</td>
                  <td>{entrada.Fecha}</td>
                  <td>{entrada.Concepto}</td>
                  <td></td>
                  <td>
                    <button className="btn d-flex m-auto" onClick={()=>{
                      deleteEntrada(entrada.id)
                    }}>
                      <img src={imgEliminar} alt="" className="imgEditar" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MostrarEntradas;
