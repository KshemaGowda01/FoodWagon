import { useState, type FormEvent } from "react";
import "./Footer.css";

const cities = [
  ["San Francisco", "Miami", "San Diego", "East Bay", "Long Beach"],
  ["Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville"],
  ["New York City", "Orange County", "Atlanta", "Charlotte", "Denver"],
  ["Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City"],
  ["Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"],
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="foodwagon-footer">
      <section className="footer-order-banner">
        <img
          className="banner-food banner-food-left"
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500"
          alt=""
        />

        <div className="footer-banner-content">
          <h2>
            Are you ready to order with
            <br />
            the best deals?
          </h2>
          <a href="#popular-items" className="footer-order-button">
            PROCEED TO ORDER <span>›</span>
          </a>
        </div>

        <img
          className="banner-food banner-food-right"
          src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500"
          alt=""
        />
      </section>
      <div className="footer-dark">
        <div className="footer-inner">
          <section className="top-cities">
            <h3>Our top cities</h3>

            <div className="cities-grid">
              {cities.map((cityList, index) => (
                <div className="city-column" key={index}>
                  {cityList.map((city) => (
                    <a href="#cities" key={city}>
                      {city}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <div className="footer-divider" />
          <div className="footer-main-grid">
            <div className="footer-link-column">
              <h3>Company</h3>
              <a href="#about">About us</a>
              <a href="#team">Team</a>
              <a href="#careers">Careers</a>
              <a href="#blog">Blog</a>
            </div>

            <div className="footer-link-column">
              <h3>Contact</h3>
              <a href="#help">Help & Support</a>
              <a href="#partner">Partner with us</a>
              <a href="#ride">Ride with us</a>
            </div>

            <div className="footer-link-column">
              <h3>Legal</h3>
              <a href="#terms">Terms & Conditions</a>
              <a href="#refund">Refund & Cancellation</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#cookie">Cookie Policy</a>
            </div>

            <div className="footer-follow">
              <h3>FOLLOW US</h3>

              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  ◎
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  ♥
                </a>
              </div>

              <h4>Receive exclusive offers in your mailbox</h4>

              <form
                className="footer-subscribe"
                onSubmit={handleSubscribe}
              >
                <div className="footer-input-wrap">
                  <span>✉</span>
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button type="submit">Subscribe</button>
              </form>

              {message && (
                <p className="footer-message">{message}</p>
              )}
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              All rights Reserved <span>©</span> Your Company
            </p>
            <p>
              Made with <span className="footer-heart">♥</span> by
              Themewagon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
