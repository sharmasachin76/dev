const layout = require('../layout');

module.exports = () => {
 
   return layout({
    content: `
      <div id="cart" class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-four-fifths">
            <h3 class="subtitle"><b>Checkout</b></h3>
            <div>
             Thanks for Shopping with us. Your item will be dispatched soon.
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    `
  });
};
