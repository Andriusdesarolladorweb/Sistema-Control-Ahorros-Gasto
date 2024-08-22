import { Sequelize } from "sequelize";

const db = new Sequelize("sistema_control_ahorros_gasto", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
