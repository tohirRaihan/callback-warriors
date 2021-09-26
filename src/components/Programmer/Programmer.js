import {
    faFacebookF,
    faGooglePlusG,
    faLinkedinIn,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Programmer.css';

const Programmer = () => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="programmer">
                <div className="picture">
                    <img
                        className="img-fluid"
                        src="https://picsum.photos/130/130?image=1027"
                        alt="Programmer"
                    />
                </div>
                <div className="team-content">
                    <h3 className="name">Michele Miller</h3>
                    <h4 className="title">Web Developer</h4>
                </div>
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
    );
};

export default Programmer;
