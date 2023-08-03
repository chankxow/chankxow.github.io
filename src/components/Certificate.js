import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Certificate = () => {
  return (
    <div
      id="certificate"
      className="section text-black max-w-max mx-h-max mx-auto f-anupan"
    >
      <div className="container text-center">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-10  "
        >
          CERTIFICATE
        </motion.h1>

        <div className="flex flex-col gap-y-10 lg:flex-row h-max">
          <div className="certificate-post mr-4">
            <div className="certificate-image"></div>
            <div className="certificate-description bg-white/40">
              <p className="text-title"> Card Title</p>
              <p className="text-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
