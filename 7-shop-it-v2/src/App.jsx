
import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartBadge from './components/CartBadge';
import CartTable from './components/CartTable';

function App() {

  console.log("App Rendered");
  const [cart, setCart] = useState([]);

  const handleBuy = (product) => {
    const existingCartLine = cart.find(item => item.id === product.id);
    if(!existingCartLine) {
      setCart([...cart, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        total: product.price
      }]);
    } else {
      existingCartLine.quantity += 1;
      existingCartLine.total = existingCartLine.quantity * existingCartLine.price;
      setCart([...cart]);
    }
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
        cart={cart}
      />
    </div>
  )
}

export default App