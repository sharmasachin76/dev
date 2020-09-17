import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import {clearCart} from '../../redux/cart/cart.actions';
import './checkout.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

const CheckoutPage = ({cartItems,total,history, dispatch})=> (
    <div className='checkout-page'> 
        <div className='checkout-header'>
           <div className='header-block' >
               <span>Product</span>
           </div>
           <div className='header-block' >
               <span>Description</span>
           </div>
           <div className='header-block' >
               <span>Quantity</span>
           </div>
           <div className='header-block' >
               <span>Price</span>
           </div>
           <div className='header-block' >
               <span>Remove</span>
           </div>
        </div>

        { cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>
            <span>Total: ${total}</span>
        </div>
        <div className='pay'>
            <CustomButton type='submit'onClick={()=> {
            history.push('/delivery');
            dispatch(clearCart())
        }
        }>Proced To Pay</CustomButton>
        </div>

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});


 
export default withRouter(connect(mapStateToProps)(CheckoutPage));