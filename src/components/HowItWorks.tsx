import {
  MapPin,
  ClipboardList,
  CreditCard,
  Utensils,
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Select location",
    description:
      "Choose the location where your food will be delivered.",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Choose order",
    description:
      "Check over hundreds of menus to pick your favorite food.",
    icon: ClipboardList,
  },
  {
    id: 3,
    title: "Pay advanced",
    description:
      "It's quick, safe, and simple. Select several methods of payment.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Enjoy meals",
    description:
      "Food is made and delivered directly to your home.",
    icon: Utensils,
  },
];

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-container">
        <h2>How does it work</h2>

        <div className="steps-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="step-card" key={step.id}>
                <div className="step-icon">
                  <Icon size={38} strokeWidth={2.2} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
