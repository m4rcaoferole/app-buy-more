import cart from "../../assets/cart.svg"

import "./styles.scss"

export interface INumberCartProps {
  quantityProduct?: number
}

export const Header = ({ quantityProduct }: INumberCartProps) => {

  return (
    <div className="container-header">
      <div className="title-wrapper">
        <h1>BuyMore</h1>
      </div>

      <div className="cart-container">        
          <div className="cart-wrapper">
            <img src={cart} alt="Carrinho de compras" />
            <div 
              className="circle-container"
            >
              {quantityProduct}
            </div>
          </div>
      </div>
    </div>
  )
}