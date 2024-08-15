import "../css/Gastos.css";
import React, { useState, useEffect } from "react";
import imgEditar from "../img/Editar.png";
import imgEliminar from "../img/borrar.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function CrudAhorros() {
  const MostrarDatos = [];
  // Cargar datos desde localStorage o usar datos predeterminados
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("Ahorros");
    return storedData ? JSON.parse(storedData) : MostrarDatos;
  });
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [concepto, setConcepto] = useState("");
  const [editId, setEditId] = useState(null);

  // Guardar datos en localStorage cuando 'data' cambia
  useEffect(() => {
    localStorage.setItem("Ahorros", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Monto") {
      setMonto(value);
    } else if (name === "Fecha") {
      setFecha(value);
    } else if (name === "Concepto") {
      setConcepto(value);
    }
  };

  // Insertar registro
  const handleInsertClick = () => {
    if (!monto || !fecha || !concepto) {
      toast.error("Por favor, complete todos los campos");
      return;
    }

    if (!editId) {
      const newId = data.length ? Math.max(...data.map((d) => d.id)) + 1 : 1;
      const nuevaEntrada = { id: newId, monto, fecha, concepto };
      setData([...data, nuevaEntrada]);
      setMonto("");
      setFecha("");
      setConcepto("");
    }

    //Alerta de que se registro correctamente
    toast.success("¡Se ha registrado correctamente!");
  };

  // Editar registros
  const handleEditClick = (id) => {
    const entryToEdit = data.find((entry) => entry.id === id);
    if (entryToEdit) {
      setMonto(entryToEdit.monto);
      setFecha(entryToEdit.fecha);
      setConcepto(entryToEdit.concepto);
      setEditId(id);
    }
  };

  const handleSaveClick = () => {
    const newData = data.map((entry) => {
      if (entry.id === editId) {
        return {
          ...entry,
          monto: monto,
          fecha: fecha,
          concepto: concepto,
        };
      }
      return entry;
    });
    setData(newData);
    setMonto("");
    setFecha("");
    setConcepto("");
    setEditId();

    //Alerta de que se edito correctamente
    toast.success("¡Se ha editado correctamente!");
  };

  const handleDeleteClick = (id) => {
    const newData = data.filter((entry) => entry.id !== id);
    setData(newData);

    //Alerta de que se elimino correctamente
    toast.success("¡Se ha eliminado correctamente!");
  };

  return (
    <div>
      <ToastContainer />
      <div className="container-primary d-flex  p-5">
        <div className="Container-formulario">
          <form className="Formulario bg-white text-black">
            <div className="Container-titulo bg-primary">
              <h4 className="text-center text-white">Registro De Ahorros</h4>
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
                  value={monto}
                  onChange={handleChange}
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
                  value={fecha}
                  onChange={handleChange}
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
                  value={concepto}
                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary submit-btn text-center d-flex m-auto"
                onClick={editId ? handleSaveClick : handleInsertClick}
              >
                {editId ? "Actualizar" : "Agregar"}
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
              {data.map((elemento) => (
                <tr key={elemento.id}>
                  <td>{elemento.id}</td>
                  <td>{elemento.monto}</td>
                  <td>{elemento.fecha}</td>
                  <td>{elemento.concepto}</td>
                  <td className="d-flex">
                    <button
                      className="btn d-flex m-auto "
                      onClick={() => handleEditClick(elemento.id)}
                    >
                      <img src={imgEditar} alt="" className="imgEditar" />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn d-flex m-auto"
                      onClick={() => handleDeleteClick(elemento.id)}
                    >
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
}

//Array para mostrar datos en la tabla
