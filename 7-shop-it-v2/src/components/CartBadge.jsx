

function CartBadge({ cartCount }) {
    return (
        <>
            <i style={{ fontSize: '20px' }} className="fa fa-shopping-cart"></i>
            &nbsp;
            <span className="badge bg-danger">{cartCount}</span>
            &nbsp;item(s) in cart
        </>
    );
}

export default CartBadge;