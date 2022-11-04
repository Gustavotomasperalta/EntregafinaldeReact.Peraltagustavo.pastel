import React from "react";

export default function ItemCount({ qty, setQty, onAdd, stock }) {

  const handlerMinus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handlerPlus = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };

  return (
    <div className="count-container">
      <div className="div-container-button">
        <button className="button-container"  onClick={handlerMinus}> - </button>

        <span className="span-count">{qty}</span>

        <button className="button-container" onClick={handlerPlus}>+</button>
      </div>

      <button
        className="button-añadir" onClick={() => {onAdd()}}> Lo Quiero!</button>
    </div>
  );
}
