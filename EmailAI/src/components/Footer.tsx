import "./styles/footer.css";
import InstaIcon from "../assets/Instaicon.svg";
import TwitterIcon from "../assets/Twittericon.svg";
function Footer() {
  return (
    <footer id="Footer">
      <div className="container d-flex justify-content-evenly align-items-center wrap">
        <ul className="list-group list-group-flush">
          <li className="list-group-item footer-text">Copyright © </li>
          <li className="list-group-item footer-text">All rights reserved</li>
          <li className="list-group-item footer-text">
            <div className="icons">
              <img src={InstaIcon} alt="" />
              <img src={TwitterIcon} alt="" />
            </div>
          </li>
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item footer-header">Company</li>
          <li className="list-group-item footer-text">About us</li>
          <li className="list-group-item footer-text">Contact us</li>
          <li className="list-group-item footer-text">Pricing</li>
          <li className="list-group-item footer-text">Testimonials</li>
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item footer-header">Support</li>
          <li className="list-group-item footer-text">Help center</li>
          <li className="list-group-item footer-text">Terms of service</li>
          <li className="list-group-item footer-text">Legal</li>
          <li className="list-group-item footer-text">Privacy Policy</li>
        </ul>
        <ul className="list-group list-group-flush">
        <li className="list-group-item footer-header">Stay up to date</li>
        <li className="list-group-item footer-text">
          <form action="" className="contact-form">
          <input
              type="email"
              className="form-control footer-inputbox"
              id="Email"
              aria-describedby="Email"
              placeholder="Your email address"
            />
          </form>
        </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
