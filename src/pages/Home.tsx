import { useEffect, useState } from "react";
import { ProductsList } from "../components/ProductsList";
import { api } from "../services/api";
import { ListProducts } from "../types/products";

import "./styles.scss";

export const Home: React.FC = () => {
  const [products, setProducts] = useState<ListProducts[]>([]);

  async function fetchProducts() {
   try {
      const response = await api.get("/products")
      setProducts(response.data)
   } catch (error) {
      console.log(error)
   }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h1>BuyMore</h1>
      </div>
      {products.map((product) => (
        <ProductsList 
         key={product.id}
         title={product.title}
         image={product.image}
         description={product.description}
         price={product.price}
         />
      ))}
    </div>
  );
};
