import {
  Clock,
  MapPin,
  Percent,
  Smartphone,
} from "lucide-react";

function AppFeatures() {
  return (
    <>
      <section className="app-benefits-section">
        <div className="app-benefits-container">
          <article className="app-benefit">
            <div className="app-benefit-icon">
              <Percent size={38} />
            </div>
            <h3>Daily Discounts</h3>
          </article>

          <article className="app-benefit">
            <div className="app-benefit-icon">
              <MapPin size={38} />
            </div>
            <h3>Live Tracking</h3>
          </article>

          <article className="app-benefit">
            <div className="app-benefit-icon">
              <Clock size={38} />
            </div>
            <h3>Quick Delivery</h3>
          </article>
        </div>
      </section>
      <section className="install-app-section">
        <div className="install-app-container">
          <div className="phone-mockups" aria-label="Food delivery app preview">
            <div className="phone phone-back">
              <div className="phone-speaker" />
              <div className="phone-content">
                <span className="phone-greeting">Your Order</span>
                <div className="phone-order-card">
                  <span>Chicken Burger</span>
                  <small>Preparing your food...</small>
                </div>
                <div className="phone-order-card">
                  <span>Delivery status</span>
                  <small>Your order is on the way</small>
                </div>
              </div>
            </div>

            <div className="phone phone-front">
              <div className="phone-speaker" />
              <div className="phone-content">
                <span className="phone-greeting">
                  What do you have a taste for?
                </span>

                <div className="phone-search">
                  Search for food
                </div>

                <div className="phone-food-types">
                  <span>🍕</span>
                  <span>🍔</span>
                  <span>🍜</span>
                  <span>🍰</span>
                </div>

                <strong>Popular near you</strong>

                <div className="phone-food-image">
                  <span>🍔</span>
                  <div>
                    <b>Cheese Burger</b>
                    <small>Delicious and fresh</small>
                  </div>
                </div>

                <div className="phone-food-image">
                  <span>🍕</span>
                  <div>
                    <b>Fresh Pizza</b>
                    <small>Hot and tasty</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="install-app-content">
            <div className="install-app-icon">
              <Smartphone size={30} />
            </div>

            <h2>Install the app</h2>

            <p>
              It's never been easier to order food. Find your favourite
              restaurants, discover delicious meals, and get your food
              delivered right to your home.
            </p>

            <div className="app-store-buttons">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="app-store-button"
              >
                <span>▶</span>
                <span>
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </span>
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="app-store-button"
              >
                <span>●</span>
                <span>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppFeatures;
