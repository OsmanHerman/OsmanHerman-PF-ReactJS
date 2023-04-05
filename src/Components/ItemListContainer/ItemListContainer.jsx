import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter( (elemento) => elemento.category === categoryName);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => {resolve(categoryName ? productosFiltrados : products)}, 3000);
    });

    productList
      .then((res) => {setItems(res);})
      .catch((error) => {console.log(error);});
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );


};


/*const ItemListContainer = ({ greeting }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(206, 206, 206)",
      }}
    >
      <h1>{greeting}</h1>
    </div>
  );
};*/

export default ItemListContainer;