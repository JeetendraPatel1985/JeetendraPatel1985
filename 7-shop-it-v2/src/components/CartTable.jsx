

function CartTable(props) { 
    const { cart, onRemove } = props;
    if(cart.length === 0) {
        return <div className="alert alert-info">No items in cart</div>
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(cartLine => (
                    <tr key={cartLine.id}>
                        <td>{cartLine.name}</td>
                        <td>&#8377;{cartLine.price}</td>
                        <td>{ cartLine.quantity}</td>
                        <td>&#8377;{ cartLine.total}</td>
                        <td>
                            <button onClick={() => onRemove(cartLine.id)} className="btn btn-danger">Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CartTable;