import "../css/menu.css";
import Gastos from "./Gastos";
import CrudEntradas from "./CrudEntradas";
import ReporteEntradas from "./ReportesEntradas";

export default function Menu({ changeComponent }) {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg bg-black  ">
        <div class="container-fluid">
          <a class="navbar-brand text-white " href="#">
            Control de ahorros
          </a>

          <div class="collapse navbar-collapse   " id="navbarNavDropdown">
            <ul class="navbar-nav  ">
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  onClick={() => changeComponent(<CrudEntradas />)}
                >
                  Entradas
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  onClick={() => changeComponent(<Gastos />)}
                >
                  Gastos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Ahorros
                </a>
              </li>

              <li class="nav-item ">
                <a class="nav-link  " href="#">
                  Tajertas de credito
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link  " href="#">
                  Pagos de deudas
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Todos los reportes
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => changeComponent(<ReporteEntradas />)}
                    >
                      Reportes de Entradas
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Reportes de Gatos
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
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
