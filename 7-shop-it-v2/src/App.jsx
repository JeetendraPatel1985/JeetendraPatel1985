
import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  console.log("App Rendered");
  const [cart, setCart] = useState([]);

  return (
    <div className="container">
      <Navbar title="Shop IT" />
      <hr />
      <span className="badge bg-danger">{cart.length}</span>  item(s) in cart
      <hr />
      <ProductList />
    </div>
  )
}

export default App