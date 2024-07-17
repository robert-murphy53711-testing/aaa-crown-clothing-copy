import {useState, createContext, useContext, useEffect} from 'react';

const getIndex = (cartItems, product) => {
    let index = -1;
    if( cartItems != null && product != null ) {
        index = cartItems.findIndex( (elem) => {
            return elem.id == product.id;
        })
    }

    return index;
} 


const getCartItem = (cartItems, product, index) => {
    let cartItem = null;
    if( index < 0 ) {
        cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity: 0,
        }
    }
    else {
        cartItem = cartItems[index];
    }
    return cartItem;
}


/* const removeCartItem = (cartItems, productToRemove) => {

    let index = getIndex(cartItems, productToRemove );
    let cartItem = getCartItem(cartItems, productToRemove, index);
    cartItem.quantity--;
    if( index < 0 )
        cartItems.splice(index, 1);

    return cartItems;
} */


const removeCartItem = (cartItems,  index) => {
    console.log('remove cart item');
    let rkm = [];

    //if( index < 0 )
        rkm = cartItems.splice(index, 1);

    return rkm;
}


const addCartItem = (cartItems, productToAdd) => {


    //return cartItems;
    const existingCartItem = cartItems.find( (elem) => {
        return elem.id == productToAdd.id;
    }); 



    if( existingCartItem != null ) {
        return cartItems.map( (elem) => {
            let rtn = elem.id == existingCartItem.id ? {
                ...existingCartItem,
                 key: existingCartItem.id, 
                 quantity: existingCartItem.quantity + 1,
            } : elem;

            return rtn;
        })
    }

    // if found, increment quantity

    // return new array with modified cart items
    let item = [...cartItems, {...productToAdd, quantity: 1}];
    return item;
    //return [...cartItems, {...productToAdd, quantity: 1}];
    
}

export const CartContext = createContext({
    isCartOpen: Boolean,
    setIsCartOpen: () => null, 
    cartItems: [],
    setCartItems: (items) => null,
    addItemToCart: (productToAdd) => null,
    removeItemFromCart: (productToRemove) => null,
    emptyCart: () => null,
    cartItemCount: 0,
    removeCartItem: (cartItems, index) => null,
    incrementItemCount: (index) => null,
    decrementItemCount: (index) => null,
    totalCartItemCost: 0,
});


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [totalCartItemCost, setTotalCartItemCost] = useState(0);

    useEffect( () => {
        let cartCount = cartItems.reduce( (countItems, elem) => {
            return countItems + elem.quantity;
        }, 0);

        setCartItemCount( cartCount );

        let totalCost = calculateTotalCartItemCost();

        setTotalCartItemCost( totalCost );
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(
            addCartItem(cartItems, productToAdd)
        );
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(
            removeCartItem(cartItems, productToRemove)
        );
    }

    const emptyCart = () => {
        setCartItems( [] );
    }

    const countItems = () => {
        let count = 0;

        if (countItems == null || cartItems.length == 0)
            count = 0;
        else {
            cartItems.map( (elem) => {
                count = count + elem.quantity;
            });
        }
        return count;
    }

    const removeCartItem = (bob, index) => {
        console.log(bob);
        console.log(index);
        let quantity = cartItems[index].quantity;
        let rkm = cartItems.splice(index, 1);
        console.log(rkm);
        console.log(cartItems);
        setCartItemCount( cartItemCount == 0 ? 0 : cartItemCount - quantity );
        setCartItems( cartItems );
/*         setCartItems(
            cartItems.splice(index, index)
        ); */
    }

    const incrementItemCount = (index) => {

        console.log('increment executing');
        console.log( cartItems[index]);

        let mQuantity = 0;
        let itemCount = cartItemCount;
        if( cartItems != null && cartItems[index] != null) {

            mQuantity = cartItems[index].quantity + 1;
            itemCount =  cartItemCount + 1;
            console.log( itemCount );
        }
        
        cartItems[index].quantity = mQuantity;

        console.log( cartItems[index]);
        setCartItemCount( itemCount );
        setCartItems( cartItems );


        calculateAndSetCartItemCost();
    }

    const decrementItemCount = (index) => {

        let mQuantity = 0;
        let itemCount = cartItemCount;
        if( cartItems != null 
            && cartItems[index] != null 
            && cartItems[index].quantity > 0) {

            mQuantity = cartItems[index].quantity - 1;
            itemCount = cartItemCount == 0 ? 0 : cartItemCount - 1
        }

        cartItems[index].quantity = mQuantity;
        setCartItemCount( itemCount );
        setCartItems( cartItems );

        calculateAndSetCartItemCost();
    }

    const calculateTotalCartItemCost = () => {
        let total = 0;

        if (cartItems != null) {
            total = cartItems.reduce( (total, elem) => {
                return  total + (elem.quantity * elem.price);
            }, 0);
        }
        return total;
    }

    const   calculateAndSetCartItemCost = () => {

        let totalCost = calculateTotalCartItemCost();

        setTotalCartItemCost( totalCost );
    }


    const value = {
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        setCartItems,
        addItemToCart, 
        removeItemFromCart, 
        emptyCart,
        cartItemCount,
        removeCartItem,
        incrementItemCount,
        decrementItemCount,
        totalCartItemCost,
    };


    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}