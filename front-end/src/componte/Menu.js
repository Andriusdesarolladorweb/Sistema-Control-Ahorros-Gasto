
import "../css/menu.css";
import Gastos from "./crud_gastos/Gastos.js";
import CrudEntradas from "./crud_entradas/CrudEntradas.js";
import ReporteEntradas from "./repostes/ReportesEntradas.js";

export default function Menu({ changeComponent }) {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-black  ">
        <div className="container-fluid">
          <a className="navbar-brand text-white " href="#">
            Control de ahorros
          </a>

          <div className="collapse navbar-collapse   " id="navbarNavDropdown">
            <ul className="navbar-nav   ">
              <li className="nav-item ">
                <a
                  className="nav-link text-white  "
                  href="#"
                  onClick={() => changeComponent(<CrudEntradas />)}
                >
                  Entradas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white "
                  href="#"
                  onClick={() => changeComponent(<Gastos />)}
                >
                  Gastos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="#">
                  Ahorros
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link text-white  " href="#">
                  Tajertas de credito
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white  " href="#">
                  Pagos de deudas
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Todos los reportes
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => changeComponent(<ReporteEntradas />)}
                    >
                      Reportes de Entradas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Reportes de Gatos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Reportes de Ahorros
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
