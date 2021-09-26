import './CartItem.css';

const CartItem = props => {
    const {cartItem} = props;

    return (
        <div className="shopping-cart-item d-flex align-items-center gap-2 mb-3">
            <img
                src={cartItem.image}
                alt="Programmer"
            />
            <div className="shopping-cart-items-info">
                <span className="item-name">{cartItem.name}</span>
                <span className="item-price text-primary">${cartItem.salary}</span>
                <span className="item-quantity text-muted ms-3 d-none d-lg-inline">
                    Quantity: 01
                </span>
            </div>
        </div>
    );
};

export default CartItem;
