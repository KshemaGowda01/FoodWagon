import { useState } from "react";
import { Star, Zap } from "lucide-react";

interface Restaurant {
  id: number;
  name: string;
  image: string;
  discount: number;
  rating: number;
  status: "Open Now" | "Opens tomorrow";
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Foodworld",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500",
    discount: 20,
    rating: 46,
    status: "Opens tomorrow",
  },
  {
    id: 2,
    name: "Pizzahub",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    discount: 15,
    rating: 40,
    status: "Opens tomorrow",
  },
  {
    id: 3,
    name: "Donuts hut",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500",
    discount: 10,
    rating: 20,
    status: "Open Now",
  },
  {
    id: 4,
    name: "Donuts hut",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500",
    discount: 15,
    rating: 50,
    status: "Open Now",
  },
  {
    id: 5,
    name: "Ruby Tuesday",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
    discount: 10,
    rating: 26,
    status: "Open Now",
  },
  {
    id: 6,
    name: "Kuakata Fried Chicken",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500",
    discount: 25,
    rating: 53,
    status: "Open Now",
  },
  {
    id: 7,
    name: "Red Square",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
    discount: 10,
    rating: 45,
    status: "Open Now",
  },
  {
    id: 8,
    name: "Taco Bell",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500",
    discount: 10,
    rating: 35,
    status: "Open Now",
  },
];

function FeaturedRestaurants() {
  const [showAll, setShowAll] = useState(false);

  const displayedRestaurants = showAll
    ? restaurants
    : restaurants.slice(0, 8);

  return (
    <section className="restaurants-section" id="featured-restaurants">
      <div className="restaurants-container">
        <h2>Featured Restaurants</h2>

        <div className="restaurants-grid">
          {displayedRestaurants.map((restaurant) => (
            <article className="restaurant-card" key={restaurant.id}>
              <div className="restaurant-image">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  loading="lazy"
                />

                <span className="restaurant-discount">
                  {restaurant.discount}% off
                </span>

                <span className="fast-delivery">
                  <Zap size={12} />
                  Fast
                </span>
              </div>

              <div className="restaurant-info">
                <h3>{restaurant.name}</h3>

                <p className="restaurant-rating">
                  <Star size={15} fill="currentColor" />
                  {restaurant.rating}
                </p>
              </div>

              <span
                className={
                  restaurant.status === "Open Now"
                    ? "restaurant-status open"
                    : "restaurant-status closed"
                }
              >
                {restaurant.status}
              </span>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="view-all-button"
          onClick={() => setShowAll((value) => !value)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </section>
  );
}

export default FeaturedRestaurants;
