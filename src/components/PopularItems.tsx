import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface FoodItem {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  image: string;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Cheese Burger",
    restaurant: "Burger Arena",
    price: 3.88,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 2,
    name: "Toffe's Cake",
    restaurant: "Top Sticks",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
  },
  {
    id: 3,
    name: "Dancake",
    restaurant: "Cake World",
    price: 1.99,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    id: 4,
    name: "Crispy Sandwich",
    restaurant: "Fastfood Dine",
    price: 3.0,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
  },
  {
    id: 5,
    name: "Thai Soup",
    restaurant: "Foody Man",
    price: 2.79,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
  },
  {
    id: 6,
    name: "Chicken Burger",
    restaurant: "Food Corner",
    price: 5.25,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500",
  },
];

function PopularItems() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFood, setSelectedFood] = useState("");

  const visibleItems = Array.from(
    { length: 5 },
    (_, index) => foodItems[(currentIndex + index) % foodItems.length]
  );

  const showPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? foodItems.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((current) => (current + 1) % foodItems.length);
  };

  return (
    <section className="popular-section" id="popular-items">
      <div className="popular-container">
        <div className="section-heading">
          <h2>Popular items</h2>

          <div className="slider-buttons">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous food items"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next food items"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="popular-grid">
          {visibleItems.map((food) => (
            <article className="food-card" key={food.id}>
              <img src={food.image} alt={food.name} loading="lazy" />

              <h3>{food.name}</h3>

              <p className="food-restaurant">
                <MapPin size={13} />
                {food.restaurant}
              </p>

              <p className="food-price">${food.price.toFixed(2)}</p>

              <button
                type="button"
                className="order-button"
                onClick={() => setSelectedFood(food.name)}
              >
                Order Now
              </button>
            </article>
          ))}
        </div>

        {selectedFood && (
          <p className="food-selection-message" role="status">
            {selectedFood} selected!
          </p>
        )}
      </div>
    </section>
  );
}

export default PopularItems;
