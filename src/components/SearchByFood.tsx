import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FoodCategory {
  id: number;
  name: string;
  image: string;
}

const foodCategories: FoodCategory[] = [
  {
    id: 1,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
  },
  {
    id: 2,
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
  },
  {
    id: 3,
    name: "Noodles",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
  },
  {
    id: 4,
    name: "Sub-sandwich",
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400",
  },
  {
    id: 5,
    name: "Chowmein",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
  },
  {
    id: 6,
    name: "Steak",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
  },
];

function SearchByFood() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handlePrevious = () => {
    const currentIndex = foodCategories.findIndex(
      (food) => food.name === selectedCategory
    );

    const previousIndex =
      currentIndex <= 0
        ? foodCategories.length - 1
        : currentIndex - 1;

    setSelectedCategory(foodCategories[previousIndex].name);
  };

  const handleNext = () => {
    const currentIndex = foodCategories.findIndex(
      (food) => food.name === selectedCategory
    );

    const nextIndex =
      currentIndex === -1 || currentIndex === foodCategories.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedCategory(foodCategories[nextIndex].name);
  };

  return (
    <section className="search-food-section">
      <div className="search-food-container">
        <div className="search-food-heading">
          <h2>Search by Food</h2>

          <div className="food-navigation">
            <button
              type="button"
              aria-label="Previous food category"
              onClick={handlePrevious}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              aria-label="Next food category"
              onClick={handleNext}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="food-category-grid">
          {foodCategories.map((food) => (
            <button
              type="button"
              className={`food-category ${
                selectedCategory === food.name ? "selected" : ""
              }`}
              key={food.id}
              onClick={() => setSelectedCategory(food.name)}
              aria-pressed={selectedCategory === food.name}
            >
              <img src={food.image} alt={food.name} loading="lazy" />
              <span>{food.name}</span>
            </button>
          ))}
        </div>

        {selectedCategory && (
          <p className="selected-food-message" role="status">
            Selected category: {selectedCategory}
          </p>
        )}
      </div>
    </section>
  );
}

export default SearchByFood;
