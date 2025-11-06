import "../css/citas.css";
import React, { useState, useEffect } from "react";
import imgEditar from "../img/Editar.png";
import imgEliminar from "../img/borrar.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Citas() {
  // Datos iniciales
 const datosIniciales = [
    { id: 1, fecha: "2024-07-14", paciente: "Juan Pérez", motivo: "Chequeo general" },
    { id: 2, fecha: "2024-06-14", paciente: "María López", motivo: "Dolor de cabeza" },
    { id: 3, fecha: "2024-05-20", paciente: "Carlos Gómez", motivo: "Control de presión" },
    { id: 4, fecha: "2024-04-25", paciente: "Ana Torres", motivo: "Evaluación preoperatoria" },
    { id: 5, fecha: "2024-03-11", paciente: "Luis Martínez", motivo: "Consulta por alergias" },
    { id: 6, fecha: "2024-03-28", paciente: "Carmen Rivera", motivo: "Chequeo dental" },
    { id: 7, fecha: "2024-02-10", paciente: "Pedro Sánchez", motivo: "Revisión oftalmológica" },
    { id: 8, fecha: "2024-02-22", paciente: "Laura Fernández", motivo: "Análisis de sangre" },
    { id: 9, fecha: "2024-01-15", paciente: "Miguel Rodríguez", motivo: "Chequeo pediátrico" },
    { id: 10, fecha: "2024-01-30", paciente: "Elena Castro", motivo: "Control postoperatorio" },
    { id: 11, fecha: "2024-08-01", paciente: "Ricardo Jiménez", motivo: "Chequeo cardíaco" },
    { id: 12, fecha: "2024-09-05", paciente: "Isabel Duarte", motivo: "Consulta nutricional" },
  ];

  // Estado: carga desde localStorage o usa los iniciales
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("citas");
    return storedData ? JSON.parse(storedData) : datosIniciales;
  });

  // Campos del formulario
  const [fecha, setFecha] = useState("");
  const [paciente, setPaciente] = useState("");
  const [motivo, setMotivo] = useState("");
  const [editId, setEditId] = useState(null);

  // Guardar en localStorage al cambiar los datos
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Fecha") setFecha(value);
    else if (name === "Paciente") setPaciente(value);
    else if (name === "Motivo") setMotivo(value);
  };

  // Insertar cita
  const handleInsertClick = () => {
    if (!fecha || !paciente || !motivo) {
      toast.error("Por favor, complete todos los campos");
      return;
    }

    const newId = data.length ? Math.max(...data.map((d) => d.id)) + 1 : 1;
    const nuevaCita = { id: newId, fecha, paciente, motivo };

    setData([...data, nuevaCita]);
    setFecha("");
    setPaciente("");
    setMotivo("");
    toast.success("¡Cita registrada correctamente!");
  };

  // Editar cita
  const handleEditClick = (id) => {
    const cita = data.find((c) => c.id === id);
    if (cita) {
      setFecha(cita.fecha);
      setPaciente(cita.paciente);
      setMotivo(cita.motivo);
      setEditId(id);
    }
  };

  const handleSaveClick = () => {
    const newData = data.map((cita) =>
      cita.id === editId ? { ...cita, fecha, paciente, motivo } : cita
    );
    setData(newData);
    setFecha("");
    setPaciente("");
    setMotivo("");
    setEditId(null);
    toast.success("¡Cita actualizada correctamente!");
  };

  // Eliminar cita
  const handleDeleteClick = (id) => {
    const newData = data.filter((cita) => cita.id !== id);
    setData(newData);
    toast.success("¡Cita eliminada correctamente!");
  };

  return (
    <div>
      <ToastContainer />
      <div className="container-primary d-flex p-5">
        {/* Formulario */}
        <div className="Container-formulario">
          <form className="Formulario bg-white text-black">
            <div className="Container-titulo bg-primary">
              <h4 className="text-center text-white">Registro de Citas</h4>
            </div>
            <div className="container">
              <div className="mb-3">
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
                <label htmlFor="Paciente" className="form-label">
                  Paciente
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Paciente"
                  name="Paciente"
                  value={paciente}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Motivo" className="form-label">
                  Motivo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Motivo"
                  name="Motivo"
                  value={motivo}
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

        {/* Tabla */}
        <div className="container-table">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Paciente</th>
                <th>Motivo</th>
                <th className="text-center btn-editar">Editar</th>
                <th className="text-center btn-eliminar">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {data.map((cita) => (
                <tr key={cita.id}>
                  <td>{cita.id}</td>
                  <td>{cita.fecha}</td>
                  <td>{cita.paciente}</td>
                  <td>{cita.motivo}</td>
                  <td className="d-flex">
                    <button
                      className="btn d-flex "
                      onClick={() => handleEditClick(cita.id)}
                    >
                      <img src={imgEditar} alt="Editar" className="imgEditar m-auto" />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn d-flex "
                      onClick={() => handleDeleteClick(cita.id)}
                    >
                      <img src={imgEliminar} alt="Eliminar" className="imgEditar m-auto" />
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
