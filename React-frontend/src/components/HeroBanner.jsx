import { useEffect, useState } from "react";

const SLIDES = [
  { image: "images/2.jpg", title: "End of Season Sale", subtitle: "Up to 70% off on top brands" },
  { image: "images/4.jpg", title: "New Season Arrivals", subtitle: "Fresh styles, freshly dropped" },
  { image: "images/6.jpg", title: "Footwear Fest", subtitle: "Step into big discounts" },
];

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-banner">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className={`hero-slide ${index === activeIndex ? "hero-slide-active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-slide-overlay">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.image}
            className={`hero-dot ${index === activeIndex ? "hero-dot-active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
