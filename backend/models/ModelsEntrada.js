import db from "../database/conexion.js";

import { DataTypes } from "sequelize";

const MostarEntrada = db.define(
  "entradas",
  {
    Id: { type: DataTypes.INTEGER },
    Monto: { type: DataTypes.DECIMAL(20, 2) },
    Fecha: { type: DataTypes.STRING },
    Concepto: { type: DataTypes.STRING },
  },
  {
    tableName: "entradas",
    timestamps: false,
  }
);

export default MostarEntrada;
