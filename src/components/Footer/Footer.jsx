import "./Footer.scss";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <p>&copy; Agatha A Msola</p>
      <div className="adress-container">
        <address>
          Koksche str 31, <br /> 49080, Osnabrueck
          <br /> Germany
        </address>
      </div>
      <div className="social">
        <a href="linkedin.com/in/agatha-augustine-msola" target="blank">
          <FaLinkedinIn className="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
