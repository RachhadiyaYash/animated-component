import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import techDetails from "../data/techDetails";

const TechnologyStack = () => {
  const [activeSection, setActiveSection] = useState("Frontend");

  // Ensure the frontend section is open on initial load
  useEffect(() => {
    setActiveSection("Frontend");
  }, []);

  const toggleTech = (tech) => {
    setActiveSection(activeSection === tech ? "" : tech);
  };

  return (
    <>
      <br />
      <br />
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto">
          {/* For large screens */}
          <div className="hidden lg:flex gap-2 p-4">
            <div className="w-1/3 space-y-1">
              {Object.keys(techDetails).map((tech) => (
                <div
                  key={tech}
                  className={`p-4 bg-white border cursor-pointer ${
                    activeSection === tech
                      ? "border-blue-500 font-bold text-blue-800"
                      : "border-blue-500"
                  } rounded`}
                  onClick={() => toggleTech(tech)}
                >
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </div>
              ))}
            </div>
            <div className="w-2/3 bg-white border border-blue-500 rounded">
              <AnimatePresence>
                {activeSection && (
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {techDetails[activeSection]}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* For small screens */}
          <div className="lg:hidden border border-blue-500 rounded-lg m-2">
            <div className="flex flex-col">
              {Object.keys(techDetails).map((tech) => (
                <div
                  key={tech}
                  className="p-4 bg-white border border-blue-500 relative"
                >
                  <div
                    className={`cursor-pointer ${
                      activeSection === tech
                        ? "font-bold text-blue-800 pl-4"
                        : ""
                    }`}
                    onClick={() => toggleTech(tech)}
                  >
                    {tech.charAt(0).toUpperCase() + tech.slice(1)}
                    {activeSection !== tech && (
                      <svg
                        className="w-4 h-4 absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                  <AnimatePresence>
                    {activeSection === tech && (
                      <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {techDetails[activeSection]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyStack;
