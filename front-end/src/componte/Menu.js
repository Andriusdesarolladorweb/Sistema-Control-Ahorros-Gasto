
import "./css/menu.css";
import Citas from './crud_citas/citas.js'
import Doctores from './crud_doctores/doctores.js'

export default function Menu({ changeComponent }) {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid ">
          <a className="navbar-brand text-white bold text-center" href="#">
          Sistema de gestion de citas
          </a>

       

        <div className="collapse navbar-collapse   " id="navbarNavDropdown">
            <ul className="navbar-nav   ">
              <li className="nav-item ">
                <a
                  className="nav-link text-white bold "
                  href="#"
                  onClick={() => changeComponent(<Citas />)}
                >
                Registro de citas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white "
                  href="#"
                  onClick={() => changeComponent(<Doctores />)}
                >
                 Resgistro de Medicos
                </a>
              </li>
            </ul>
          </div>
     </div>
      
      </nav>
    </div>
  );
}
