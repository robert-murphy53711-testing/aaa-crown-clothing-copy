import './checkout.styles.scss';

import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';


const  Checkout = () => {


    const {cartItems, addItemToCart, removeItemFromCart} = useContext( CartContext );


    const handleIncrementClick = (event) => {
        const index = event.currentTarget.id;
        addItemToCart( cartItems[index] );
    }

    const handleDecrementClick = (event) => {
        const index = event.currentTarget.id;
        removeItemFromCart( cartItems[index] );
    }


    return (
        <div>
            Checkout Page
            {cartItems.map( (elem, index) => {
                const {id, name, quantity} = elem;
                console.log( id );
                console.log( name );
                console.log( quantity );
                return (
                    <div key={id}>
                        <h2>{elem.name}</h2>
                        <span className='nav-link' id={index} onClick={() => removeItemFromCart(elem)}> &lt; </span>
                        <span>{quantity}</span>
                        <span className='nav-link' id={index} onClick={() => addItemToCart(elem)}> &gt;</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Checkout;