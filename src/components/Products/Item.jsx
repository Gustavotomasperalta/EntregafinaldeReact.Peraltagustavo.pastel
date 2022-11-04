import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";


function Item(props) {
  let { price, tittle, img, detail, stock, id } = props;
  
  const urlDetalle = `/pasteles/${id}`;

  return (
    <div className="card-count">
      <div className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{tittle}</h3>
        <p>{detail} </p>
        <h4>$ {price}</h4>
        <p>Stock disponible: {stock} </p>
        <Link to= {urlDetalle} >
          <button className="button_info">+ Info</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
