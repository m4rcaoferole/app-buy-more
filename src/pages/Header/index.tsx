import cart from "../../assets/cart.svg"

import "./styles.scss"

export const Header = () => {

  return (
    <div className="container-header">
      <h1>BuyMore</h1>

      <div className="cart-container">        
          <img src={cart} alt="Carrinho de compras" />
          <div className="circle-container">
            3
          </div>
      </div>
    </div>
  )
}