import {Fragment, useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import {UserContext} from '../../contexts/user.context';
import './navigation.styles.scss';

import {signOutUser} from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {CartContext} from '../../contexts/cart.context';





const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    //console.log( currentUser );

    const {isCartOpen} = useContext(CartContext);


    const signOutHandler = async () => {
      const response = await signOutUser();
      //setCurrentUser(null);
    }

    return (
      <Fragment>
        <div className="navigation">
          <Link className='logo-container' to='/'> 
            <CrwnLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            { currentUser != null ? <span className='nav-link' onClick={ signOutHandler }>SIGN OUT</span> : (
              
            <Link className='nav-link' to='auth'>
              SIGN IN
          </Link>
            )}
            <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet />
      </Fragment>
    );
}

export default Navigation;