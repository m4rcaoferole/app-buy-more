import { IProduct } from "../../types/products";
import "./styles.scss";

export const ProductsList = ({
  title,
  image,
  description,
  price,
}: IProduct) => {
  return (
    <>
      <div className="card-container">
        <div className="figure-container">
          <img src={image} alt="Imagem do produto" />
        </div>

        <div className="content-container">
          <div className="title-product">{title}</div>
          <p>{description}</p>
          <div className="value-product">
            <span>****</span>
            <div>R$ {price}</div>
          </div>
          <div>
            <button>Add Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
