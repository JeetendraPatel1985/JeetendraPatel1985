

function CartTable({ cart, onRemove, onQuantityChange, onClearCart }) { 
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
                        <td>
                            <div className="d-flex">
                                <button onClick={() => onQuantityChange(cartLine.id, -1)} className="btn btn-primary">
                                    <i className="fa fa-minus"></i> 
                                </button>
                                <span className="mx-2">{cartLine.quantity}</span>
                                <button onClick={() => onQuantityChange(cartLine.id, 1)} className="btn btn-primary">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </td>
                        <td>&#8377;{ cartLine.total}</td>
                        <td>
                            <button onClick={() => onRemove(cartLine.id)} className="btn btn-danger">Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3">Total</td>
                    <td>&#8377;{ cart.reduce((total, cartLine) => total + cartLine.total, 0) }</td>
                    <td>
                        <button onClick={onClearCart} className="btn btn-primary">clear cart</button>
                    </td>
                </tr>
            </tfoot>
        </table>
  );
}

export default CartTable;