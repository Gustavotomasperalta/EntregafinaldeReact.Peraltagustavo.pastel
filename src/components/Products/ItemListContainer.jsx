import React, { useState, useEffect } from "react";
import "./ItemCount.css";
import {getItems,  getItemsByCategory } from "../../services/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Ring } from '@uiball/loaders'

export default function ItemListContainer() {
  let [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cat } = useParams();

  useEffect(() => {
    setData([]);
    setIsLoading(true);
    if (cat === undefined) {
      getItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    } else {
      getItemsByCategory(cat).then((respuestaDatosFiltrado) => setData(respuestaDatosFiltrado))
      .finally(() => setIsLoading(false))
    }
  }, [cat]);

  return (
    <div>
      {isLoading ? (
        <div className="position-absolute top-50 start-50 translate-middle"><Ring size={90} lineWeight={5} speed={2} color="black" /></div>
      ) : 
        <div className="container mt-5">
          <div className=" d-flex g-3 row">
            <ItemList data={data} />
          </div>
        </div>
      }      
    </div>
    
  );
}
