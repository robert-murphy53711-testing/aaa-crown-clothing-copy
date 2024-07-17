import {useContext, useState, useEffect} from 'react';
import {CartContext} from '../../contexts/cart.context';
import './cart-checkout3.styles.scss';


const  CartCheckout3 = () => {

    

    const {
        cartItems, 
        removeCartItem, 
        cartItemCount, 
        incrementItemCount, 
        decrementItemCount,
        totalCartItemCost,} = useContext(CartContext);
    let [items, setItems] = useState(cartItems);
    let [bool, setBool] = useState(false);
    let totalCost = 0;
    const calculate = () => {
        let mTotalCost = 0;
        if( cartItems != null && cartItems.length > 0) {
            mTotalCost = cartItems.reduce( (total, cost) => {
                return total + cost;
            })
        }
        return mTotalCost;
    }

    totalCost = calculate();
    console.log( totalCost );

    useEffect( () => {
        console.log('useEffect executing');
/*         items = cartItems.map( (elem) => {
            return elem;
        }); */
        setItems( cartItems );
        console.log(items);
    }, [bool]);

    const arr = [
        {id:10, name: 'Garty'},
        {id:11, name: 'Bob'},
        {id:12, name: 'Tyronne'},
        {id:13, name: 'Betty'}
    ];

    const handleClick = (event) => {
        const index = event.currentTarget.id;
        console.log('index == ' + index);
        removeCartItem(cartItems, index);
        //items = items.splice(index, index);
       //let rkm = items.splice(index,1);
        //setCartItems( items );
        //console.log(items);
        setBool( !bool );
    }


    const handleIncrementClick = (event) => {
        const index = event.currentTarget.id;
        console.log('index == ' + index);
        incrementItemCount( index );
    }

    const handleDecrementClick = (event) => {
        const index = event.currentTarget.id;
        console.log('index == ' + index);
        decrementItemCount( index );
    }

    return (
        <div>
            CartCheckout3 -rkm

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
                    {items.map( (elem, index) => {

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
                                        <span  className='nav-link' id={index} onClick={handleClick}>X</span>
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

{/*             <div className='checkout-container'>
                {items.map( (elem, index) => {
                    return (
                        <div className='checkout-container' key={elem.id}>
                            <img src={elem.imageUrl}></img>
                            <h3>{elem.name}</h3>
                            <span>{elem.quantity}</span>
                            <span>${elem.price}</span>
                            <span id={index} onClick={handleClick}>X</span>
                            </div>
                    );
                })}
            </div> */  }
        </div>
    );

}

export default CartCheckout3;