import React from "react";

const Promotion = () => {
  return (
    <section className="bg-bg py-16 px-6 text-center text-text">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-sans font-bold mb-4 text-primary">
      🔥 Limited-Time Offer! Get 30% Off
    </h2>
    <p className="text-lg mb-6">
      Upgrade your experience with our premium features. Hurry, the offer ends soon!
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      <a
        href="/pricing"
        className="bg-card text-primary font-semibold py-3 px-6 rounded-lg shadow-md border border-border hover:bg-hover hover:text-bg transition"
      >
        View Pricing
      </a>

      <a
        href="/signup"
        className="bg-primary text-text font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-hover hover:text-bg border border-border transition"
      >
        Get Started Now
      </a>
    </div>

    <p className="text-sm mt-4 text-text">
      Offer valid until <span className="font-semibold text-primary">March 31, 2025</span>.
      Don’t miss out!
    </p>
  </div>
</section>

  );
};

export default Promotion;
