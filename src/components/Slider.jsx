import React from "react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    bgImage: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    title: "wev app",
    description: "Empowering innovation with cutting-edge tech solutions, insightful blogs, and reliable tools for developers.",
  },
  {
    id: 2,
    bgImage: "https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=bo9P4L3HQM2cipWrh8W7_HwPYNnUdHKqucWnduQLge0=",
    title: "phone app",
    description: "Your go-to platform for technology news, tutorials, and resources to build future-ready solutions.",
  },
  {
    id: 3,
    bgImage: "https://media.istockphoto.com/id/1643921163/photo/business-people-use-internet-technology-to-study-on-tablets-digital-marketing-ideas-create.webp?a=1&b=1&s=612x612&w=0&k=20&c=sI1pFZzvcGSYy_P0AZrD8DbO12r4fZCEe6_keyhevOA=",
    title: "smart app",
    description: "Simplifying tech for everyone with expert insights, tutorials, and tools to drive success.",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative  overflow-hidden h-[400px] w-full">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, x: index > currentSlide ? "100%" : "-100%" }}
          animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? 0 : index > currentSlide ? "100%" : "-100%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`absolute top-0 left-0 h-full w-full bg-cover bg-center`} 
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-6xl font-bold mb-2 font-calligraphy text-[rgb(54,211,255)]">{slide.title}</h2>
            <p className="text-lg mb-4">{slide.description}</p>
            <button variant="outline">Learn More</button>
          </div>
        </motion.div>
      ))}

      <div className="absolute top-2/3 transform -translate-y-1/2 left-4 flex gap-2">
        <button onClick={handlePrev} className="bg-[#00c6ff] hover:text-purple-500 text-black btn bg-opacity-70 border-transparent hover:bg-opacity-100">Prev</button>
        <button onClick={handleNext} className="bg-[#00c6ff] hover:text-purple-500 btn text-black bg-opacity-70 border-transparent hover:bg-opacity-100">Next</button>
      </div>
    </div>
  );
}
