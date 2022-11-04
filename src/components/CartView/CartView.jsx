import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { createBuyOrder } from "../../services/firestore";
import { CartContext } from "../context/CartContext";
import "./CartView.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CheckOutForm from "../CheckoutForm/CheckoutForm";

function CartView() {
  const context = useContext(CartContext);
  const { cart, deleteItem, emptyCart, getItemPrice, getItemQty } = context;  
  const navigate = useNavigate();



  if (cart.length === 0) {
    return (
      <div className=" div-sincompra w-100 mt-5">
        <h4 className="fs-1 text-center">
          Aun no hay productos en el carrito!!
        </h4>
        <div className="text-center m-4">
          <img
            src="./img/carrovacio.png"
            className="rounded mx-auto  imgcarro"
            alt=""
          />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to="/" className="text-center">
            <button className="col-10 btn btn-outline-warning " type="button">
              IR AL CARRITO
            </button>
          </Link>
        </div>
      </div>
    );
  }

  function handleCheckout() {   

    const orderData = {
      buyer: {
        name: "",
        phone: "",
        email: "",
      },
      item: cart,
      total: getItemPrice(),
    };

    createBuyOrder(orderData).then((respuesta) => {
      Swal.fire({
        icon: "success",
        title: `Gracias por su compra`,
        text: `Su codigo de pedido es: ${respuesta}. Vía mail le enviaremos toda la info.`,
      }).catch(() =>
        Swal.fire({
          icon: "error",
          title: "cuack!",
          text: "Error al realizar la compra, intentelo de nuevo mas tarde",
        })
      );
    });
    emptyCart();
    navigate("/");
  }

  return (
    <div className="container_card  d-flex justify-content-around p-4">
      <div className="me-4 p-2 div-container_card">
        {cart.map((data) => (
          <div className="card mb-3">
            <div className="row g-0 ">
              <div className="col-md-4">
                <img
                  className="img-fluid rounded-start"
                  src={data.img}
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{data.tittle}</h4>

                  <p className="">
                    <span>Cantidad:</span> <strong>{data.qty}</strong>
                  </p>
                  <p className="">
                    <span>Precio x U: </span>
                    <strong>${data.price}</strong>{" "}
                  </p>
                  <p className="">
                    <span>Subtotal: </span>
                    <strong>${data.price * data.qty}</strong>{" "}
                  </p>

                  <div className="div-remove">
                    <button
                      onClick={() => deleteItem(data.id)}
                      type="button"
                      className=" btn btn-danger"
                    >
                      Borrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="ms-2">
          Cantidad Total: <strong>{getItemQty()}</strong>
        </div>
      </div>
      <div className="fin-tr">
        <h4 className="fw-bold">Total: $ {getItemPrice()} </h4>
        <p>Complete los datos de la orden de compra</p>
        <div className=" ">          
          <CheckOutForm />         
        </div>
        <div className="modal-footer justify-content-around">
          <button className="btn btn-warning" onClick={emptyCart}>
            Vaciar Carrito
          </button>
          <button className="btn btn-outline-success" onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <Link className="btn btn-primary" to="/">
            Ver mas productos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartView;
