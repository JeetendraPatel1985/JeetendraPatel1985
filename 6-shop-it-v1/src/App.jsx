
import { useState } from 'react'
import classNames from 'classnames';

function App() {
  console.log("App Rendered");
  const [currentTab, setCurrentTab] = useState(1);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 100000,
      description: "Laptop for all your computing needs",
      imageUrl: "/images/Laptop.png"
    },
    {
      id: 2,
      name: "Smartphone",
      price: 50000,
      description: "Smartphone for all your communication needs",
      imageUrl: "/images/Mobile.png"
    },
  ]

  const handleTabChange = (tabIndex) => {
    setCurrentTab(tabIndex);
  }

  const renderTabPanel = (product) => {
    switch (currentTab) {
      case 1:
        return <div className="mt-3">{product.description}</div>
      case 2:
        return (
          <div className="mt-3">
            <ul>
              <li>RAM: 16GB</li>
              <li>Storage: 512GB SSD</li>
              <li>Processor: Intel i7</li>
            </ul>
          </div>
        )
      case 3:
        return <div className="mt-3">No reviews yet</div>
      default:
        return null;
    }
  }

  const renderProducts = () => {
    return products.map(product => (
      <div className="list-group-item" key={product.id}>
        <div className="row">
          <div className="col-4">
            <img src={product.imageUrl} className="img-fluid" />
          </div>
          <div className="col-8">
            <div>{product.name}</div>
            <div>&#8377;{product.price}</div>
            <button className="btn btn-primary">Add to Cart</button>
            <ul className="mt-3 nav nav-tabs">
              <li className="nav-item">
                <a onClick={() => handleTabChange(1)} className={classNames('nav-link', { active: currentTab === 1 })} href="#">Description</a>
              </li>
              <li className="nav-item">
                <a onClick={() => handleTabChange(2)} className={classNames('nav-link', { active: currentTab === 2 })} href="#">Specification</a>
              </li>
              <li className="nav-item">
                <a onClick={() => handleTabChange(3)} className={classNames('nav-link', { active: currentTab === 3 })} href="#">Reviews</a>
              </li>
            </ul>
            {renderTabPanel(product)}
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="container">
      <div className="display-1">Shop IT</div>
      <hr />
      <div className="list-group">
        {renderProducts()}
      </div>
    </div>
  )
}

export default App