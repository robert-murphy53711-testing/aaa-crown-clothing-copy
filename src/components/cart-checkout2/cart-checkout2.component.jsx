import {useContext, useState, useEffect} from 'react';
import {CartContext} from '../../contexts/cart.context';


const  CartCheckout2 = () => {

    

    const {cartItems, removeCartItem} = useContext(CartContext);
    let [items, setItems] = useState(cartItems);
    let [bool, setBool] = useState(false);

    useEffect( () => {
        console.log('useEffect executing');
        console.log(cartItems);
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

    return (
        <div>
            CartCheckout2

            <div>
                {/* {console.log(items)} */}
                {items.map( (elem, index) => {
                    return (
                        <div key={elem.id}>
                            <span id={index} onClick={handleClick}>{elem.name}</span>

                            </div>
                    );
                })}
            </div>
        </div>
    );

}

export default CartCheckout2;