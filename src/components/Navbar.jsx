import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";

export function MyNavbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("LoggedIn")
  );

  const handleLoggedOut = () => {
    localStorage.clear();
    //setIsLoggedIn(false);
    navigate("/");
    window.location.reload(true);
  };

  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("LoggedIn"));
  }, []);
  return (
    <>
    <Navbar className="color-navbar" expand="sm" sticky="top">
      <Container>
      <button className="btn btn-dark" onClick={toggleLogin}>Login</button>
        <Link
          className="navbar-brand fs-3 notranslate"
          to={"/"}
          id="logo__title"
        >
          <img src="../img/branding/logo_light_horizontal.svg"alt="logo de la marca"></img>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="navbarID">
          <Nav className="w-100 d-flex justify-content-end">
            <ul className="nav" id="navBar__Collapse">
              {isLoggedIn  ? (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/shop"}
                      className="nav-link d-flex align-items-center gap-2 Link"
                    >
                      <p className="m-0 p-0 ">SHOP</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={handleLoggedOut}
                      className="nav-link d-flex align-items-center logout"
                    >
                      <p className="m-0 p-0">SALIR</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/"}
                      className="nav-link d-flex align-items-center gap-2 Link"
                    >
                      <img src="../img/icons/cart-icon.svg" alt="cart-icon"/>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                 
                  <li className="nav-item d-flex align-items-center">
                  <li className="nav-item d-flex align-items-center">
                    <Link to={"/shop"} className="nav-link Link">
                    SHOP
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <Link
                      to={"/login"}
                      className="nav-link d-flex align-items-center gap-2 login "
                    >
                      <p className="m-0 p-0">LOGIN</p>
                      <i class="bi bi-box-arrow-in-right fs-4 p-0 m-0"></i>
                    </Link>
                  </li>
                  
                    <Link
                      to={"/register"}
                      className="nav-link d-flex align-items-center gap-2  Link"
                    >
                      <p className="m-0 p-0 ">SIGUP</p>
                      <i class="bi bi-box-arrow-up fs-4 p-0 m-0"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/"}
                      className="nav-link d-flex align-items-center gap-2 Link"
                    >
                      <img src="../img/icons/cart-icon.svg" alt="cart-icon"/>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
