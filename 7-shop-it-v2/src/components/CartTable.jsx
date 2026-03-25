

function CartTable(props) { 
    const { cart } = props;
    if(cart.length === 0) {
        return <div className="alert alert-info">No items in cart</div>
    }
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>&#8377;{item.price}</td>
                        <td>qty</td>
                        <td>total</td>
                        <td>action</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CartTable;