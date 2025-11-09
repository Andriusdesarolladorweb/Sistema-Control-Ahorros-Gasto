// import "../css/doctores.css";
import React, { useState, useEffect } from "react";
import imgEditar from "../img/Editar.png";
import imgEliminar from "../img/borrar.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Doctores() {
  // Datos iniciales
  const datosIniciales = [
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología", telefono: "809-555-1234", correo: "juanperez@hospital.com" },
    { id: 2, nombre: "Dra. María López", especialidad: "Pediatría", telefono: "829-222-5566", correo: "marialopez@hospital.com" },
    { id: 3, nombre: "Dr. Carlos Gómez", especialidad: "Neurología", telefono: "849-331-7788", correo: "carlosgomez@hospital.com" },
    { id: 4, nombre: "Dra. Ana Torres", especialidad: "Dermatología", telefono: "809-777-9922", correo: "anatorres@hospital.com" },
    { id: 5, nombre: "Dr. Luis Martínez", especialidad: "Medicina General", telefono: "849-225-4455", correo: "luismartinez@hospital.com" },
    { id: 6, nombre: "Dra. Carmen Rivera", especialidad: "Ginecología", telefono: "809-123-4567", correo: "carmenrivera@hospital.com" },
    { id: 7, nombre: "Dr. Pedro Sánchez", especialidad: "Oftalmología", telefono: "829-555-9988", correo: "pedrosanchez@hospital.com" },
    { id: 8, nombre: "Dra. Laura Fernández", especialidad: "Nutrición", telefono: "849-777-3366", correo: "laurafernandez@hospital.com" },
    { id: 9, nombre: "Dr. Miguel Rodríguez", especialidad: "Odontología", telefono: "809-111-6655", correo: "miguelrodriguez@hospital.com" },
    { id: 10, nombre: "Dra. Elena Castro", especialidad: "Psiquiatría", telefono: "849-222-8844", correo: "elenacastro@hospital.com" },
    { id: 11, nombre: "Dr. Ricardo Jiménez", especialidad: "Urología", telefono: "829-333-2211", correo: "ricardojimenez@hospital.com" },
    { id: 12, nombre: "Dra. Isabel Duarte", especialidad: "Endocrinología", telefono: "809-444-9988", correo: "isabelduarte@hospital.com" },
  ];

  // Estado: carga desde localStorage o usa los iniciales
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("doctores");
    return storedData ? JSON.parse(storedData) : datosIniciales;
  });

  // Campos del formulario
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [editId, setEditId] = useState(null);

  // Guardar en localStorage al cambiar los datos
  useEffect(() => {
    localStorage.setItem("doctores", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Nombre") setNombre(value);
    else if (name === "Especialidad") setEspecialidad(value);
    else if (name === "Telefono") setTelefono(value);
    else if (name === "Correo") setCorreo(value);
  };

  // Insertar doctor
  const handleInsertClick = () => {
    if (!nombre || !especialidad || !telefono || !correo) {
      toast.error("Por favor, complete todos los campos");
      return;
    }

    const newId = data.length ? Math.max(...data.map((d) => d.id)) + 1 : 1;
    const nuevoDoctor = { id: newId, nombre, especialidad, telefono, correo };

    setData([...data, nuevoDoctor]);
    setNombre("");
    setEspecialidad("");
    setTelefono("");
    setCorreo("");
    toast.success("¡Doctor registrado correctamente!");
  };

  // Editar doctor
  const handleEditClick = (id) => {
    const doctor = data.find((d) => d.id === id);
    if (doctor) {
      setNombre(doctor.nombre);
      setEspecialidad(doctor.especialidad);
      setTelefono(doctor.telefono);
      setCorreo(doctor.correo);
      setEditId(id);
    }
  };

  const handleSaveClick = () => {
    const newData = data.map((doctor) =>
      doctor.id === editId ? { ...doctor, nombre, especialidad, telefono, correo } : doctor
    );
    setData(newData);
    setNombre("");
    setEspecialidad("");
    setTelefono("");
    setCorreo("");
    setEditId(null);
    toast.success("¡Datos del doctor actualizados correctamente!");
  };

  // Eliminar doctor
  const handleDeleteClick = (id) => {
    const newData = data.filter((doctor) => doctor.id !== id);
    setData(newData);
    toast.success("¡Doctor eliminado correctamente!");
  };

  return (
    <div>
      <ToastContainer />
      <div className="container-primary d-flex p-5">
        {/* Formulario */}
        <div className="Container-formulario">
          <form className="Formulario bg-white text-black">
            <div className="Container-titulo bg-primary">
              <h4 className="text-center text-white">Registro de Medicos</h4>
            </div>
            <div className="container">
              <div className="mb-3">
                <label htmlFor="Nombre" className="form-label">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Nombre"
                  name="Nombre"
                  value={nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Especialidad" className="form-label">
                  Especialidad
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Especialidad"
                  name="Especialidad"
                  value={especialidad}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Telefono" className="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Telefono"
                  name="Telefono"
                  value={telefono}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Correo" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Correo"
                  name="Correo"
                  value={correo}
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
                <th>Nombre</th>
                <th>Especialidad</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th className="text-center btn-editar">Editar</th>
                <th className="text-center btn-eliminar">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {data.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.id}</td>
                  <td>{doctor.nombre}</td>
                  <td>{doctor.especialidad}</td>
                  <td>{doctor.telefono}</td>
                  <td>{doctor.correo}</td>
                  <td className="d-flex">
                    <button
                      className="btn d-flex"
                      onClick={() => handleEditClick(doctor.id)}
                    >
                      <img src={imgEditar} alt="Editar" className="imgEditar m-auto" />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn d-flex"
                      onClick={() => handleDeleteClick(doctor.id)}
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
