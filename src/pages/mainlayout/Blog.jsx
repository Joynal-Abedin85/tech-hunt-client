import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="py-16 px-6 bg-primary text-text">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Our Latest Blogs</h2>
    <p className="text-lg mb-12 text-text/90">
      Stay up-to-date with the latest insights, tips, and trends from our expert team.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          img: "https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_640.jpg",
          title: "Exploring the Future of Web Development",
          desc: "Web development is constantly evolving. In this article, we discuss the latest trends and innovations shaping the future.",
        },
        {
          img: "https://t3.ftcdn.net/jpg/02/13/82/64/360_F_213826408_rgNjb6np2y56rYuBQDhipOmXtnB7l4UT.jpg",
          title: "Top 10 JavaScript Frameworks in 2025",
          desc: "With so many frameworks available, it's hard to choose the right one. We explore the top JavaScript frameworks that are expected to dominate in 2025.",
        },
        {
          img: "https://img.freepik.com/premium-vector/website-page-development-website-maintenance-illustration_112255-749.jpg?semt=ais_hybrid",
          title: "The Importance of UI/UX Design in 2025",
          desc: "As user experience becomes more critical, UI/UX design continues to play a major role. Here's why you should focus on it in 2025.",
        },
        {
          img: "https://media.graphassets.com/prAEoC4TxODVH7gj27N9",
          title: "The Rise of Progressive Web Apps (PWAs)",
          desc: "Progressive Web Apps (PWAs) are changing the way we build apps. Learn how PWAs offer better performance and usability.",
        },
        {
          img: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/12ee6ac16474.jpeg",
          title: "How Artificial Intelligence is Revolutionizing Web Development",
          desc: "Artificial Intelligence is taking web development to new heights. Discover how AI is enhancing automation and user experiences.",
        },
        {
          img: "https://img-c.udemycdn.com/course/750x422/685550_8ed4.jpg",
          title: "SEO Tips for 2025: What You Need to Know",
          desc: "Search Engine Optimization (SEO) is constantly evolving. Learn the essential SEO tips that will keep your website ahead in 2025.",
        },
      ].map((blog, i) => (
        <div key={i} className="bg-card p-6 rounded-lg shadow-lg hover:scale-105 transition-all border border-border">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4 text-hover">{blog.title}</h3>
          <p className="mb-4 text-text/80">{blog.desc}</p>
          <a href="#" className="text-hover hover:underline font-medium">
            Read More
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Blog;
