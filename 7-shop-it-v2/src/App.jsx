
import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartBadge from './components/CartBadge';
import CartTable from './components/CartTable';

function App() {

  console.log("App Rendered");
  const [cart, setCart] = useState([]);
  const [iscartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(!iscartOpen);
  }

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
  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  }
  const handleQuantityChange = (id, quantity) => {
    const existingCartLine = cart.find(item => item.id === id);
    if(existingCartLine) {
      existingCartLine.quantity += quantity;
      if(existingCartLine.quantity === 0) {
        handleRemove(id);
        return;
      }
      existingCartLine.total = existingCartLine.quantity * existingCartLine.price;
    } 
    setCart([...cart]);
  }

  const handleClearCart = () => {
    setCart([]);
  }

  return (
    <div className="container">
      <Navbar title="Shop IT" />
      <hr />
      <CartBadge cartCount={cart.length} />
      <hr />
      <button onClick={handleToggleCart} className="btn btn-secondary">Toggle Cart</button>
      <hr/>
      {iscartOpen && (
        <CartTable
          cart={cart}
          onRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
          onClearCart={handleClearCart}
        />
      )}
        {!iscartOpen && (
          <ProductList
            onBuy={handleBuy}
            cart={cart}
          />
        )}
    </div>
  );
}

export default App;