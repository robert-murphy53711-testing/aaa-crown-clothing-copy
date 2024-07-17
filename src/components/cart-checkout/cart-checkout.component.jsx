import {useContext, useEffect, useState} from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-checkout.styles.scss';

import Button from '../button/button.component';




const removeItems = (index) => {
    console.log('hello dolly == ' + index);
}

const CartCheckout = () => {


    const {cartItems} = useContext(CartContext);
    console.log(cartItems);

    let [items, setItems] = useState([]);

    useEffect( () => {
/*         items = cartItems.map( (elem) => {
            return elem;
        }); */

        items = [
            {
                id: 11,
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                name: 'baby',
                quantity: 5,
                price: 50
            }
        ];

        setItems( items );


        console.log(items);
    }, []);

    const removeItem = (index) => {
        //console.log(index);

        //items = items.splice(index, index);
    }



/*     const removeItem = (index) =>  {
        console.log(index);
        try {
            cartItems.splice(index, index);
        }
        catch(e) {
            console.log(e);
        }
    } */

        console.log(items);

    return (
        <div className='checkoutContainer'>

            <div>
                <div>Product</div>
                <div>Description</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Remove</div>
            </div>

            <div>
                {items.map( (elem, index) => {

                    console.log('rendering index == ' + index);
                    return (
                        <div key={elem.id}>
{/*                             <div>
                                <img src={elem.imageUrl} alt={`${elem.name}`}/>
                            </div> */}
                            <div>
                                {elem.name}
                            </div>
                            <div>
                                &lt; {elem.quantity} &gt;
                            </div>
                            <div>
                                ${elem.price}
                            </div>
                            <div>
                                <span className='nav-link' onClick={ removeItems(index) }>X</span>
                                <Button onClick={removeItems(index)}>X</Button>
                            </div>
                            <div></div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default CartCheckout;