import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartView from "./components/CartView/CartView";
import MyProvider from "./components/context/CartContext";
import Footer from "./components/Footer/Footer";
import SeccionHome from "./components/SeccionHome/SeccionHome";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<SeccionHome />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/categorias/:cat" element={<ItemListContainer />} />
          <Route path="/pasteles/:id" element={<ItemDetailContainer />} />
          <Route path="/404" element={<h1>te perdiste</h1>} />
          <Route path="/Cart" element={<CartView />} />
        </Routes>
        <Footer />
      </MyProvider>
      
    </BrowserRouter>
    
  );
}

export default App;
