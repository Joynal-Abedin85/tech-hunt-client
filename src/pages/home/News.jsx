import React, { useState } from "react";

const News = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");  // Clear the input field after submission
  };

  return (
    <section className=" py-16 px-6  text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">🚀 Join Our Newsletter</h2>
        <p className="text-lg mb-6">Get the latest updates, offers, and news delivered directly to your inbox.</p>
        
        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:w-auto px-4 py-3 text-gray-800 rounded-lg outline-none border-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-200 transition-all"
            >
              Subscribe Now 🌟
            </button>
          </form>
        ) : (
          <div className="text-lg font-semibold text-yellow-200 mt-4">
            Thanks for subscribing! 🎉
          </div>
        )}
        
        <p className="text-sm opacity-80 mt-6">We value your privacy. You can unsubscribe anytime.</p>
      </div>
    </section>
  );
};



export default News;