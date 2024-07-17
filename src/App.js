import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
//import CartCheckout from './components/cart-checkout/cart-checkout.component';
//import CartCheckout2 from './components/cart-checkout2/cart-checkout2.component';
//import CartCheckout3 from './components/cart-checkout3/cart-checkout3.component';
import CartCheckout4 from './components/cart-checkout4/cart-checkout4.component';
import Shop from './routes/shop/shop.component';





/* const Shop = () => {

  return (
    <div>
      <h1>The Shopping page.</h1>
    </div>
  );
} */
const  App = () => {

  return ( 
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path='checkout' element={<CartCheckout4 />} />
        </Route>
      </Routes>
  );
}

export default App;
