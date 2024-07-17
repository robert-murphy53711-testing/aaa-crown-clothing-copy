import {useContext, useState, useEffect} from 'react';
import {CartContext} from '../../contexts/cart.context';
import './cart-checkout4.styles.scss';


const  CartCheckout4 = () => {

    

    const {
        cartItems, 
        addItemToCart,
        removeCartItem, 
        cartItemCount, 
        setCartItems,
        incrementItemCount, 
        decrementItemCount,
        totalCartItemCost,} = useContext(CartContext);


    useEffect( () => {
        console.log('CartCheckout4:  useEffect executing');

        setCartItems( cartItems );
    }, [cartItems]);



    const deleteCartItemsRow = (event) => {
        const index = event.currentTarget.id;
        removeCartItem(cartItems, index);
    }


    const handleIncrementClick = (event) => {
        const index = event.currentTarget.id;
        incrementItemCount( index );
    }

    const handleDecrementClick = (event) => {
        const index = event.currentTarget.id;
        decrementItemCount( index );
    }

    return (
        <div>
            CartCheckout4

            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map( (elem, index) => {

                        const {id, imageUrl, name, price, quantity} = elem;
                        let cost = quantity * price;
                        return (
                            <tr key={elem.id}>
                                <td><img src={elem.imageUrl}></img></td>
                                <td>{elem.name}</td>
                                <td>{elem.price}</td>
                                <td> 
                                    <span className='nav-link' id={index} onClick={handleDecrementClick}>
                                        &lt;
                                    </span>
                                    &nbsp;
                                    {elem.quantity} &nbsp;
                                        <span className='nav-link' id={index} onClick={handleIncrementClick}> 
                                            &gt; 
                                        </span> 
                                </td>
                                <td>
                                    ${cost}
                                </td>
                                <td>
                                    <div className='nav-links-container'>
                                        <span  className='nav-link' id={index} onClick={deleteCartItemsRow}>X</span>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
            </table>

            {cartItemCount > 0 && 
            <div>
                Total: ${totalCartItemCost}
            </div>}

        </div>
    );

}

export default CartCheckout4;