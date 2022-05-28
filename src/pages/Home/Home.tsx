import { useEffect, useState } from "react";
import { Header, INumberCartProps } from "../Header/index";
import { ListProducts } from "../../types/products";
import cartmini from "../../assets/cartmini.svg";

import { api } from "../../services/api";

import "./styles.scss";

export const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ListProducts[]>([]);
  const [addCart, setAddCart] = useState<INumberCartProps>();

  async function fetchProducts() {
    try {
      const response = await api.get("/products?limit=2");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleAddCart(product: ListProducts) {
    console.log(product, "Produto clicado");
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="title">
        <Header />
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="card-container">
            <div className="figure-container">
              <img src={product.image} alt="Imagem do produto" />
            </div>

            <div className="content-container">
              <div className="title-product">
                <strong>{product.title}</strong>
                <p>{product.description}</p>
              </div>

              <div className="wrapper-container">
                <div className="value-product">
                  <div>****</div>
                  <p>R$ {product.price}</p>
                </div>

                <div className="btn-container">
                  <button onClick={() => handleAddCart(product)}>
                    <img src={cartmini} alt="Carrinho do botão" />
                    <span>Add Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
