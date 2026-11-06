import { useState } from "react";
import { MapPin, Search, Bike, ShoppingBag } from "lucide-react";

function Hero() {
  const [orderType, setOrderType] = useState<"delivery" | "pickup">(
    "delivery"
  );

  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!address.trim()) {
      setMessage("Please enter your delivery address.");
      return;
    }

    setMessage(`Finding food near ${address}...`);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Are you starving?</h1>

          <p>
            Within a few clicks, find meals that are accessible near you
          </p>

          <div className="order-box">
            <div className="order-tabs">
              <button
                type="button"
                className={orderType === "delivery" ? "active" : ""}
                onClick={() => {
                  setOrderType("delivery");
                  setMessage("");
                }}
              >
                <Bike size={15} />
                Delivery
              </button>

              <button
                type="button"
                className={orderType === "pickup" ? "active" : ""}
                onClick={() => {
                  setOrderType("pickup");
                  setMessage("");
                }}
              >
                <ShoppingBag size={15} />
                Pickup
              </button>
            </div>
            <form className="address-form" onSubmit={handleSubmit}>
              <div className="address-input">
                <MapPin size={19} />
                <input
                  type="text"
                  placeholder={
                    orderType === "delivery"
                      ? "Enter Your Address"
                      : "Enter Pickup Location"
                  }
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value);
                    setMessage("");
                  }}
                />
              </div>

              <button type="submit" className="find-food-button">
                <Search size={15} />
                Find Food
              </button>
            </form>

            {message && <p className="hero-message">{message}</p>}
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800"
            alt="Delicious bowl of noodles"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
