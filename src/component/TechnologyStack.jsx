import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import techDetails from "../data/techDetails";

const TechnologyStack = () => {
  const [activeSection, setActiveSection] = useState("frontend");

  const toggleTech = (tech) => {
    setActiveSection(activeSection === tech ? "" : tech);
  };

  return (
    <>
      <br />
      <br />
      <div className=" max-w-6xl mx-auto">
        <div className="container mx-auto  ">
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
                    transition={{ duration: 0.3 }}
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
                  className="p-4 bg-white border border-blue-500 "
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
                  </div>
                  <AnimatePresence>
                    {activeSection === tech && (
                      <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
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
