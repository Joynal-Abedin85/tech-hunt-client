import React from "react";

const Uniqe = () => {
  return (
    <div>
      <section className="bg-bg py-16 px-6 text-text">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Discover Our Special Offer
          </h2>
          <p className="text-lg mb-8 text-text/80">
            We're offering a limited-time discount to help you get started with
            our platform. Don't miss out!
          </p>

          {/* Offer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card p-6 rounded-lg shadow-lg hover:scale-105 transition-all border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                20% Off for New Users
              </h3>
              <p className="mb-4 text-text/90">
                Sign up today and receive a 20% discount on your first month.
                Start exploring our services!
              </p>
              <a href="#" className="text-hover hover:underline">
                Claim Offer
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-card p-6 rounded-lg shadow-lg hover:scale-105 transition-all border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Exclusive Deals for Subscribers
              </h3>
              <p className="mb-4 text-text/90">
                Become a subscriber and enjoy exclusive deals, early access to
                new features, and much more!
              </p>
              <a href="#" className="text-hover hover:underline">
                Subscribe Now
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-card p-6 rounded-lg shadow-lg hover:scale-105 transition-all border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Free Trial for 30 Days
              </h3>
              <p className="mb-4 text-text/90">
                Try all our premium features for free for 30 days. Experience
                everything we offer with no commitment.
              </p>
              <a href="#" className="text-hover hover:underline">
                Start Free Trial
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Get Started Today!
            </h3>
            <p className="text-lg mb-8 text-text/80">
              Don't wait! These offers are only available for a limited time.
              Start your journey with us now.
            </p>
            <a
              href="#"
              className="bg-primary text-text px-6 py-3 rounded-lg hover:bg-hover transition duration-300 border border-border"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Uniqe;
