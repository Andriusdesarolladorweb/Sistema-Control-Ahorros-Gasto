import db from "../database/conexion";

import { DataTypes } from "sequelize";

const MostarEntrada = db.define("Entrada", {
  monto: { type: DataTypes.String },
  fecha: { type: DataTypes.String },
  concepto: { type: DataTypes.String },
});

export default MostarEntrada();