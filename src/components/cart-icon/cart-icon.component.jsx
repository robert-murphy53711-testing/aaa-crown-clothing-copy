
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';

import './cart-icon.styles.scss';


const CartIcon = () => {

    //const {visible, setVisible} = useContext(CartContext);
    const {isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContext);

    const toggle = () => {
        setIsCartOpen( !isCartOpen );
    }

    return (
        <div className='cart-icon-container'> 
            <ShoppingIcon className='shopping-icon' onClick={toggle}/>
            <span className='item-count'>{cartItemCount}</span>
        </div>
    );
}

export default CartIcon;