import { IProduct } from "../../types/products";
import cartmini from "../../assets/cartmini.svg"
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
          <div  className="title-product">
            <strong>
              {title}
            </strong>
            <p>{description}</p>
          </div>

          <div className="wrapper-container">
            <div className="value-product">
              <div>****</div>
              <p>R$ {price}</p>
            </div>

            <div className="btn-container">
              <button>
                <img src={cartmini} alt="Carrinho do botão"/>
                <span>Add Cart</span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
