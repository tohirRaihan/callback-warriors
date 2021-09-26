import {
    faFacebookF,
    faGooglePlusG,
    faLinkedinIn,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Programmer.css';

const Programmer = (props) => {
    const { addToCart, programmer } = props;
    const { name, email, company, address, image, salary, language } =
        programmer;

    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="programmer h-100">
                <div className="programmer-body">
                    <div className="picture">
                        <img
                            className="img-fluid"
                            src={image}
                            alt="Programmer"
                        />
                    </div>
                    <div className="team-content">
                        <h3 className="name">{name}</h3>
                        <h4 className="title">{company}</h4>
                        <p className="lead mb-0">{address}</p>
                        <p className="fw-light fst-italic text-decoration-underline text-primary">
                            {email}
                        </p>
                    </div>
                </div>

                <div className="programmer-footer w-100">
                    <div className="programmer-cost d-flex justify-content-around align-items-center mb-2">
                        <span className="expertise text-danger fw-bold">
                            {language}
                        </span>
                        <span className="salary text-success h4 mb-0">
                            $<strong className="fw-bold">{salary}</strong>
                        </span>
                    </div>
                    <button
                        onClick={() => addToCart(programmer)}
                        className="btn btn-warning"
                    >
                        <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                    </button>
                    <ul className="social">
                        <li>
                            <a href="https://facebook.com">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="https://myaccount.google.com/profile">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Programmer;
