import NavBar from "./Components/NavBar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
//BrowserRouter: envuelve toda la aplicación de react y se usa como etiqueta de apertura y cierre. Es decir, indica que va a tener un enrutamiento.
//Routes: envuelve todas aquellas pequeñas rutas.
//Route: pequeñas rutas.


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer /*greeting={"Bienvenidos a nuestro E-commerce"}*/ />}/>

            <Route path="/cart" element={ <Cart />}/>
            <Route path="/category/:categoryName" element={ <ItemListContainer/>}/>
            <Route path="/category/:categoryName" element={ <ItemListContainer/>}/>
            <Route path="/category/:categoryName" element={ <ItemListContainer/>}/>
            <Route path="/itemDetail/:id" element={ <ItemDetailContainer />}/>
          
            <Route path="*" element= {<h1>Error 404: Not found</h1>} />
          </Routes>
          </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
