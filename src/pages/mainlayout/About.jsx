import React from 'react';

const About = () => {
    return (
        <div>
             <section className="about-us bg-[#ead6fc] text-[#46007f] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
        <p className="text-lg text-center mb-6">
          At <span className="font-bold">[Your Company Name]</span>, we are dedicated to
          delivering innovative and user-friendly solutions in the world of web development. Our mission
          is to create seamless digital experiences that empower individuals and businesses to thrive in
          the fast-paced world of technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg mb-4">
              Founded by a team of passionate developers and designers, we specialize in crafting high-quality
              web applications that are not only functional but also visually stunning. With a focus on user
              experience, cutting-edge technologies, and scalability, we help businesses grow and reach their goals
              effectively.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Innovation:</strong> Constantly pushing the boundaries of technology to deliver creative solutions.</li>
              <li><strong>Quality:</strong> Ensuring high standards in every project, from design to deployment.</li>
              <li><strong>Customer-Centric:</strong> Prioritizing user needs to deliver the best experience.</li>
              <li><strong>Collaboration:</strong> Working closely with clients to understand their vision and bring it to life.</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg">
            Whether you're a startup looking for a digital presence or an enterprise seeking advanced web solutions,
            we are here to help you succeed.
          </p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default About;