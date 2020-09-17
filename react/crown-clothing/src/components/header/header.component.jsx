import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as LOGO} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { withRouter } from 'react-router-dom';
import './header.styles.scss';
import { clearCart } from '../../redux/cart/cart.actions';
 
const Header=({ currentUser, hidden,dispatch })=> (
    <div className='header'>
        <Link className= 'logo-container' to="/">
            <LOGO  className='logo' />
        </Link>


        <div className= 'options'>
        
            {   
                currentUser ?
                    <div className='user'> HELLO {currentUser.displayName!==null ? 
                                currentUser.displayName
                                : (currentUser.email).substr(0,(currentUser.email).indexOf('@'))  }</div>
                    :
                    <div className='user'>HELLO Guest</div>
            }
            <Link className= 'option' to="/shop">
                SHOP
            </Link>
            <Link className= 'option' to="/shop">
                CONTACT
            </Link>
            {   
                currentUser ?
                    <div className='option' onClick={() =>{auth.signOut(); dispatch(clearCart());} }> SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'> SIGN IN </Link>
            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown />}
    </div>
   
);
const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});
export default withRouter(connect(mapStateToProps)(Header));