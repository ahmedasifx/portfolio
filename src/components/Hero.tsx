import React, { Suspense } from "react";

const SplineScene = React.lazy(() => import("./SplineScene"));
const Hero = () => {
  return (
      <section id="home" className="relative min-h-screen">
        {/* Background Canvas */}
        <div className="absolute inset-0 z-0">
            <Suspense fallback={<div>Loading...</div>}>
                <SplineScene />
            </Suspense>
        </div>

        {/* Content */}
        <div className="relative min-h-screen pt-16 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-p4 mb-4">
                Hi, I'm <span className="text-p1">Ahmed Asif Macan Markar</span>
              </h1>
              <p className="text-xl text-p5 mb-8">
                Full Stack Developer passionate about creating beautiful and functional web applications
              </p>
              <button className="bg-p2 text-p4 px-8 py-3 rounded-lg hover:bg-s4 transition-colors duration-200 shadow-100">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;