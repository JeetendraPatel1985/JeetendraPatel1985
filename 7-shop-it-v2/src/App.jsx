
import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartBadge from './components/CartBadge';
import CartTable from './components/CartTable';

function App() {

  console.log("App Rendered");
  const [cart, setCart] = useState([]);

  const handleBuy = (cartLine) => { 
    setCart([...cart, cartLine]);
  }

  return (
    <div className="container">
      <Navbar title="Shop IT" />
      <hr />
      <CartBadge cartCount={cart.length} />
      <hr />
      <CartTable cart={cart} />
      <hr />
      <ProductList
        onBuy={handleBuy}
      />
    </div>
  )
}

export default App