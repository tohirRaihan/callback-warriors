import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';

const Cart = () => {
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
                        9
                    </span>
                </span>

                <div className="shopping-cart-total">
                    <span className="text-muted">Total:</span>
                    <span className="text-primary"> $2,229.97</span>
                </div>
            </div>

            <div className="shopping-cart-items d-flex flex-column">
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
            </div>
        </div>
    );
};

export default Cart;
