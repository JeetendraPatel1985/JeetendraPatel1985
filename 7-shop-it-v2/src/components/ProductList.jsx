

import Product from './Product';

function ProductList() {

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



    const renderProducts = () => {
        return products.map(product => (
            <div className="list-group-item" key={product.id}>
                <Product product={product} />
            </div>
        ))
    }

    return (<div className="list-group">
        {renderProducts()}
    </div>
    );
}

export default ProductList;