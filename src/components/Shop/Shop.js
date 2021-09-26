import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';
import './Shop.css';

const Shop = () => {
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./programmers.JSON')
            .then((res) => res.json())
            .then((data) => setProgrammers(data));
    }, []);

    const addToCart = programmer => {
        if (!cart.includes(programmer)) {
            const newCart = [...cart, programmer];
            setCart(newCart);
        } else {
            alert(`Already added ${programmer.name}`)
        }
    }

    return (
        <section className="shop">
            <div className="container">
                <div className="row">
                    {/* programmers section */}
                    <div className="col-md-8 programmers">
                        <div className="row g-4">
                            {programmers.map((programmer) => (
                                <Programmer key={programmer._id} programmer={programmer} addToCart={addToCart}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Cart key={cart._id} cart={cart} />
                    </div>
                </div>
                {/* ./row */}
            </div>
        </section>
    );
};

export default Shop;
