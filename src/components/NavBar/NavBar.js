import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold ms-4" to="/">
            Nuevos Rumbos Pasteleria
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto me-4">
              <Link className="navbar-brand ms-4" to="/">
                Home
              </Link>
              <li className="nav-item">
                <Link
                  to="/Nosotros"
                  className="nav-link fw-bold"
                  aria-current="page"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle fw-bold"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link
                      to="/Productos"
                      className="nav-link fw-bold"
                      aria-current="page"
                    >
                      Todos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="categorias/dietetico"
                      className="nav-link fw-bold"
                      aria-current="page"
                    >
                      Dietetico
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="categorias/sintacc" className="nav-link fw-bold">
                      Sin tacc
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="categorias/comun" className="nav-link fw-bold">
                      Comun
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </div>

    
  );
}

export default NavBar;
