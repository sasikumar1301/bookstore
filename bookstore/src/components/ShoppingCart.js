const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item.id}>
              <p>{item.title} - ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      {cartItems && cartItems.length > 0 && (
        <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
      )}
    </div>
  );
};

export default ShoppingCart;
