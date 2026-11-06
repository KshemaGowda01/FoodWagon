import { ArrowRight } from "lucide-react";

interface Promo {
  id: number;
  title: string;
  highlight: string;
  description: string;
  image: string;
  buttonText: string;
  imagePosition: "left" | "right";
}

const promotions: Promo[] = [
  {
    id: 1,
    title: "Best deals",
    highlight: "Crispy Sandwiches",
    description:
      "Enjoy the large size of sandwiches. Complete your meal with delicious sides and refreshing drinks.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
    buttonText: "PROCEED TO ORDER",
    imagePosition: "right",
  },
  {
    id: 2,
    title: "Celebrate parties with",
    highlight: "Fried Chicken",
    description:
      "Get the best fried chicken for your celebrations. Delicious food makes every moment special.",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800",
    buttonText: "PROCEED TO ORDER",
    imagePosition: "left",
  },
  {
    id: 3,
    title: "Wanna eat hot & spicy",
    highlight: "Pizza?",
    description:
      "Treat yourself to a delicious, freshly prepared pizza with your favourite toppings.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    buttonText: "PROCEED TO ORDER",
    imagePosition: "right",
  },
];

function PromoBanners() {
  return (
    <section className="promo-section">
      <div className="promo-container">
        {promotions.map((promo) => (
          <article
            className={`promo-card image-${promo.imagePosition}`}
            key={promo.id}
          >
            <div className="promo-content">
              <h2>
                {promo.title}{" "}
                <span>{promo.highlight}</span>
              </h2>

              <p>{promo.description}</p>

              <button
                type="button"
                className="promo-button"
                onClick={() =>
                  document
                    .getElementById("popular-items")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {promo.buttonText}
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="promo-image">
              <img
                src={promo.image}
                alt={promo.highlight}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PromoBanners;
