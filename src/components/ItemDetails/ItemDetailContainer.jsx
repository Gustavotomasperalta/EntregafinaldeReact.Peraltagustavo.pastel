import React, { useState, useEffect } from "react";
import { getItemsSingle } from "../../services/firestore";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
  let [data, setData] = useState({});



  const { id } = useParams();

  useEffect(() => {
    getItemsSingle(id).then((respuestaDatos) => {
      setData(respuestaDatos);
    });
  }, [id]);
  

  return (
    <div>      
      <ItemDetail data={data} />      
    </div>
  );
}

export default ItemDetailContainer;
