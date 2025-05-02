import React, { useState } from "react";
const allReviews = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Freelancer",
    text: "This platform transformed my workflow! Highly recommend.",
    image: "https://i.pravatar.cc/50?img=1",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Entrepreneur",
    text: "Amazing service and support! My business grew 2x faster.",
    image: "https://i.pravatar.cc/50?img=2",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Software Developer",
    text: "A must-have for anyone looking for efficiency and speed.",
    image: "https://i.pravatar.cc/50?img=3",
  },
  {
    id: 4,
    name: "James Carter",
    role: "Marketing Expert",
    text: "The best investment I’ve made for my team.",
    image: "https://i.pravatar.cc/50?img=4",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Designer",
    text: "Love the intuitive interface and features!",
    image: "https://i.pravatar.cc/50?img=5",
  },
  {
    id: 6,
    name: "Daniel Thompson",
    role: "Project Manager",
    text: "Great support and excellent performance.",
    image: "https://i.pravatar.cc/50?img=6",
  },
];

const Review = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedReviews = showMore ? allReviews : allReviews.slice(0, 3);

  return (
    <section className="bg-bg py-16 px-6 text-text">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          ⭐ What Our Users Say
        </h2>
        <p className="text-lg text-text/80 mb-10">
          Real feedback from our satisfied customers worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition"
            >
              <p className="italic text-text/90">"{review.text}"</p>
              <div className="flex items-center mt-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-3 border border-border"
                />
                <div>
                  <p className="font-semibold text-primary">{review.name}</p>
                  <p className="text-sm text-text/60">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-primary font-semibold hover:underline focus:outline-none"
          >
            {showMore ? "Show Less Reviews ↑" : "Read More Reviews →"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
