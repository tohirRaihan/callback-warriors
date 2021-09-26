import Programmer from '../Programmer/Programmer';
import './Shop.css';

const Shop = () => {
    return (
        <section className='shop'>
            <div className="container">
                <div className="row">
                    {/* programmers section */}
                    <div className="col-md-9 programmers">
                        <div className="row g-4">
                            <Programmer></Programmer>
                            <Programmer></Programmer>
                            <Programmer></Programmer>
                            <Programmer></Programmer>
                        </div>
                    </div>
                    <div className="col-md-3">cart</div>
                </div>
                {/* ./row */}
            </div>
        </section>
    );
}

export default Shop;
