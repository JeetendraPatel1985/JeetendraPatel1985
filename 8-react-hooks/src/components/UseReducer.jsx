import { useReducer } from "react";


import cartReducer from '../reducers/cart'

function UserReducer() {
    console.log('UserReducer comp rendered');

    const [cart, dispatch] = useReducer(cartReducer, [
        { id: 1, name: 'iPhone 14 Pro', price: 120000, qty: 1 },
        { id: 2, name: 'OnePlus 11R', price: 45000, qty: 1 },
        { id: 3, name: 'Google Pixel 7 Pro', price: 70000, qty: 1 }
    ]);

    const handleClearCart = () => {
        let action = {
            type: 'CLEAR_CART'
        }
        dispatch(action);//
    }

    const handleAddToCart = () => {
        const action = {
            type: 'ADD_TO_CART',
            payload: { id: 4, name: 'Samsung Galaxy S23 Ultra', price: 90000, qty: 1 }
        }
        dispatch(action);
    }

    const handleRemoveFromCart = () => {
        const action = {
            type: 'REMOVE_FROM_CART',
            payload: 2
        }
        dispatch(action);
    }

    return (
        <>
            <h1>useReducer hook</h1>
            <hr />
            <div>Cart Items</div>
            <hr />
            <button onClick={handleAddToCart}>Add to cart</button>
            <button onClick={handleRemoveFromCart}>Remove From Cart</button>
            <button onClick={handleClearCart}>Clear Cart</button>
            <hr />
            <ul>
                {cart.map(item => <li key={item.id}>{item.name} - {item.price} - {item.qty}</li>)}
            </ul>
        </>
    )
}

export default UserReducer