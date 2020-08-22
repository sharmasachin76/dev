const layout = require('../layout');

module.exports = ({ items }) => {
 // let totalPrice = 0;
 // for(let item of items){
 //     totalPrice += item.quantity* item.product.price;
//  }
const totalPrice = items.reduce((prev,item)=>{
    return prev+item.quantity* item.product.price;
},0);

  const renderedItems = items
    .map(item => {
      return `
        <div class="cart-item message">
          <h3 class="subtitle">${item.product.title}</h3>
          <div class="cart-right">
            <div>
              $${item.product.price}  X  ${item.quantity} = 
            </div>
            <div class="price is-size-4">
              $${item.product.price * item.quantity}
            </div>
            <div class="remove">
              <form method="POST" action="/ecomm/cart/products/delete">
              <input hidden value = "${item.id}" name="itemId" />
                <button class="button is-danger">                  
                  <span class="icon is-small">
                    <i class="fas fa-times"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  return layout({
    content: `
      <div id="cart" class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-four-fifths">
            <h3 class="subtitle"><b>Shopping Cart</b></h3>
            <form action="/ecomm/">
              <button class="button is-primary">Continue Shopping</button>
              </form>
            <div>
              ${renderedItems}
            </div>
            <div class="total message is-info">
              <div class="message-header">
                Total
              </div>
              <h1 class="title">$${totalPrice}</h1>
              
              <form method="Post" action="/ecomm/cart/checkout">
              <button class="button is-primary">Buy</button>
              </form>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    `
  });
};
