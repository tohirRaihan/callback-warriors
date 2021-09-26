import './Header.css';

const Header = () => {
    return (
        <header className='header py-5'>
            <div className="container text-light py-5">
                <h1 className='display-5 text-info fw-bold'>Make a team of Programmers</h1>
                <p className='lead'>A huge cyber attack have been strucked in to the vally and we have some top notch computer genius!!!</p>
                <h3 className='display-6'>Total Budget: <span className='fw-bold text-info'>100 Million</span></h3>
            </div>
        </header>
    );
}

export default Header;
