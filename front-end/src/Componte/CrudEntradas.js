import "../css/CrudEntradas.css";
import React, { useState, useEffect } from "react";
import imgEditar from "../img/Editar.png";
import imgEliminar from "../img/borrar.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";


// Esta es la function principar del componte
export default function CrudEntradas() {
  
   const [monto, setMonto] = useState(0);
   const [fecha, setFecha] = useState(""); 
   const [Concepto, setConcepto] = useState(""); 
 
   const mostrarDatos = () =>{
    alert(monto)
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
                  onChange={(event) =>{
                    setMonto(event.target.value);
                  }}
                  
                  
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
                  onChange={(event) =>{
                    setFecha(event.target.value);
                  }}
                   
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
                  onChange={(event) =>{
                  setConcepto(event.target.value);
                  }}
                  
                />
              </div>
              <button
                type="button"
                className="btn btn-primary submit-btn text-center d-flex m-auto"  
               onClick={mostrarDatos}
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
              
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="d-flex">
                    <button
                      className="btn d-flex m-auto "
                     
                    >
                      <img src={imgEditar} alt="" className="imgEditar" />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn d-flex m-auto"
                    
                    >
                      <img src={imgEliminar} alt="" className="imgEditar" />
                    </button>
                  </td>
                </tr>
             
            </tbody>
          </table>
        </div>
      </div>

    
    </div>
  );
}
