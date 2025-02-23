import React from 'react';

const Blog = () => {
    return (
        <section className="py-16 px-6 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold  mb-8">Our Latest Blogs</h2>
          <p className="text-lg  mb-12">Stay up-to-date with the latest insights, tips, and trends from our expert team.</p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <img src="https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_640.jpg" alt="Blog 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Exploring the Future of Web Development</h3>
              <p className="mb-4">Web development is constantly evolving. In this article, we discuss the latest trends and innovations shaping the future.</p>
              <a href="#" className="text-teal-600 hover:underline">Read More</a>
            </div>
  
            {/* Blog Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <img src="https://t3.ftcdn.net/jpg/02/13/82/64/360_F_213826408_rgNjb6np2y56rYuBQDhipOmXtnB7l4UT.jpg" alt="Blog 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Top 10 JavaScript Frameworks in 2025</h3>
              <p className="mb-4">With so many frameworks available, it's hard to choose the right one. We explore the top JavaScript frameworks that are expected to dominate in 2025.</p>
              <a href="#" className="text-purple-600 hover:underline">Read More</a>
            </div>
  
            {/* Blog Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <img src="https://img.freepik.com/premium-vector/website-page-development-website-maintenance-illustration_112255-749.jpg?semt=ais_hybrid" alt="Blog 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">The Importance of UI/UX Design in 2025</h3>
              <p className="mb-4">As user experience becomes more critical, UI/UX design continues to play a major role. Here's why you should focus on it in 2025.</p>
              <a href="#" className="text-pink-600 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>
      );
};

export default Blog;