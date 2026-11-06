interface Discount {
  id: number;
  image: string;
  percentage: number;
  daysRemaining: number;
  restaurant: string;
}

const discounts: Discount[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    percentage: 15,
    daysRemaining: 6,
    restaurant: "Green Bowl",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&h=400&fit=crop",
    percentage: 10,
    daysRemaining: 6,
    restaurant: "Pasta House",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop",
    percentage: 25,
    daysRemaining: 7,
    restaurant: "Spicy Kitchen",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    percentage: 20,
    daysRemaining: 8,
    restaurant: "Fresh Feast",
  },
];

function DiscountCards() {
  return (
    <section className="discount-section">
      <div className="discount-container">
        {discounts.map((item) => (
          <article className="discount-card" key={item.id}>
            <div className="discount-image">
              <img src={item.image} alt={item.restaurant} />

              <div className="discount-percentage">
                <strong>{item.percentage}%</strong>
                <span>Off</span>
              </div>
            </div>

            <h3>{item.restaurant}</h3>

            <span className="days-label">
              {item.daysRemaining} Days Remaining
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DiscountCards;
