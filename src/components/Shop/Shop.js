import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';
import './Shop.css';

const Shop = () => {
    return (
        <section className='shop'>
            <div className="container">
                <div className="row">
                    {/* programmers section */}
                    <div className="col-md-8 programmers">
                        <div className="row g-4">
                            <Programmer></Programmer>
                            <Programmer></Programmer>
                            <Programmer></Programmer>
                            <Programmer></Programmer>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Cart></Cart>
                    </div>
                </div>
                {/* ./row */}
            </div>
        </section>
    );
}

export default Shop;
