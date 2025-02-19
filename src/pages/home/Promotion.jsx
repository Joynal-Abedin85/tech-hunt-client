import React from "react";

const Promotion = () => {
  return (
    <section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-4">
          🔥 Limited-Time Offer! Get 30% Off
        </h2>
        <p class="text-lg mb-6">
          Upgrade your experience with our premium features. Hurry, the offer
          ends soon!
        </p>
        <div class="flex justify-center gap-4">
          <a
            href="/pricing"
            class="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100"
          >
            View Pricing
          </a>
          <a
            href="/signup"
            class="bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300"
          >
            Get Started Now
          </a>
        </div>
        <p class="text-sm mt-4">
          Offer valid until <span class="font-semibold">March 31, 2025</span>.
          Don’t miss out!
        </p>
      </div>
    </section>
  );
};

export default Promotion;
