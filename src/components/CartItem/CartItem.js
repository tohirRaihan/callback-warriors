import './CartItem.css';

const CartItem = () => {
    return (
        <div className="shopping-cart-item d-flex align-items-center gap-2 mb-3">
            <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
                alt="item1"
            />
            <div className="shopping-cart-items-info">
                <span className="item-name">Sony DSC-RX100M III</span>
                <span className="item-price text-primary">$849.99</span>
                <span className="item-quantity text-muted ms-3">
                    Quantity: 01
                </span>
            </div>
        </div>
    );
};

export default CartItem;
