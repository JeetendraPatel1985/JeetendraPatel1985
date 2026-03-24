

function App() {

  const product = {
    id: 1,
    name: "Laptop",
    price: 100000,
    description: "Laptop for all your computing needs",
    imageUrl: "/images/Laptop.png"
  }

  return (
    <div className="container">
      <div className="display-1">Shop IT</div>
      <hr />
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-4">
              <img src={product.imageUrl} className="img-fluid" />
            </div>
            <div className="col-8">
              <div>{product.name}</div>
              <div>&#8377;{product.price}</div>
              <button className="btn btn-primary">Add to Cart</button>
              <ul class="mt-3 nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link" href="#">Description</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Specification</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Reviews</a>
                </li>
              </ul>
              <div>{product.description}</div>
              <div>
                <ul>
                  <li>8 GB RAM</li>
                  <li>512 GB SSD</li>
                  <li>Intel i7 Processor</li>
                </ul>
              </div>
              <div>
                None Yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App