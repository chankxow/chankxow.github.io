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
        <div className=" max-h-max max-w-max py-20">
          <div className="flex flex-col gap-y-10 lg:flex-row h-max">
          <div className="cards ">
          <div className="card bg-slate-400 flex flex-col gap-y-10 lg:flex-row h-max ">
              <div>
                <p className="tip">Hover Me</p>
              </div>
              <div className="second-text ">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit accusamus distinctio eum tempora accusantium
                  perspiciatis et similique, incidunt quibusdam velit?
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
