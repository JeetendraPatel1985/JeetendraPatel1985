
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  console.log("App Rendered");

  return (
    <div className="container">
      <Navbar title="Shop IT" />
      <hr />
      <ProductList />
    </div>
  )
}

export default App