import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



export default function CartWidget() {
  
  const {getItemQty} = useContext(CartContext)

  return (
    <div className="p-3 d-flex">
      
     <Link className="link-icono-cart" to="Cart"><FontAwesomeIcon className="icono-cart" icon={faCartShopping} /></Link>
      <span className="ms-2">{getItemQty()}</span>
    </div>
  );
}
