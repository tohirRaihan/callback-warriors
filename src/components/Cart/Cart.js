import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    const total = cart.reduce(
        (previous, programmer) => previous + programmer.salary,
        0
    );

    return (
        <div className="shopping-cart">
            <div className="shopping-cart-header">
                <span className="position-relative">
                    <FontAwesomeIcon
                        className="position-relative"
                        icon={faShoppingBag}
                        size="2x"
                    />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                    </span>
                </span>

                <div className="shopping-cart-total">
                    <span className="text-muted">Total:</span>
                    <span className="text-primary"> ${total}</span>
                </div>
            </div>

            <div className="shopping-cart-items d-flex flex-column">
                {cart.map((cart) => (
                    <CartItem key={cart._id} cartItem={cart} />
                ))}
            </div>
        </div>
    );
};

export default Cart;
