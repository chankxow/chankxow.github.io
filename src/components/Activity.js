import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaGoogleDrive } from "react-icons/fa";

const Activity = () => {
  return (
    <div
      id="activity"
      className="text-black section max-w-max mx-h-max mx-auto f-anupan"
    >
      <div className="container text-center ">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-10  "
        >
          -MY ACTIVITY-
        </motion.h1>
<div className=" max-h-max max-w-max my-5 ">
<div className=" bg-white lg:flex rounded-3xl max-h-max max-w-max p-4">
            <div
              className="m-auto bg-cesca17 bg-center h-[250px] w-[320px] flex-none bg-cover
               rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              title="LOGO CESCa#17"
            ></div>
            <div className=" rounded-b lg:rounded-b-none lg:rounded-r 
             p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <a
                  href="https://github.com/chankxow"
                  className="text-sm text-grey-dark flex items-center"
                >
                  <FaGithub />
                  Chankxow
                </a>
                <p
                  className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-black via-indigo-500 to-blue-900 "
                >
                  CESCa#17 Online Camp
                </p>
                <p className="text-grey-darker  text-base">
                  CESCa#17 ค่ายเยาวชนวิศวกรรมคอมพิวเตอร์ (Online camp) โดย
                  สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
                  มหาวิทยาลัยขอนแก่น
                  เป็นค่ายออนไลน์ที่ได้ทำโปรเจคเป็นทีมและได้รับประสบการณ์การเรียนรู้ทางด้านวิศวกรรมคอมพิวเตอร์ระดับเริ่มต้น
                </p>
                <a
                className="btn 
                    flex justify-center mt-4 items-center mx-auto h-10 w-max"
                href="https://github.com/chankxow/Project_matthayom_5"
              >
                <FaGithub />
                READ MORE
              </a>
              </div>
              <div className="flex items-center">
                <div className="text-sm flex mx-auto">
                  <div className=" bg-blue-500  rounded-2xl mr-4 px-5">
                    <p
                      className="font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-black to-red-500"
                    >
                      • ENGINEERING
                    </p>
                  </div>
                  <div className=" bg-blue-600  rounded-2xl mr-4 px-5">
                    <p
                      className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-red-500 to-yellow-500"
                    >
                      • SOFTWARE
                    </p>
                  </div>
                  <div className=" bg-blue-700  rounded-2xl mr-4 px-5">
                    <p
                      className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-yellow-500 to-green-500"
                    >
                      • HARDWARE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className=" max-h-max max-w-max  ">
<div className=" bg-white lg:flex rounded-3xl max-h-max max-w-max p-4">
            <div
              className="m-auto bg-cesca17 bg-center h-[250px] w-[320px] flex-none bg-cover
               rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              title="LOGO CESCa#17"
            ></div>
            <div className=" rounded-b lg:rounded-b-none lg:rounded-r 
             p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <a
                  href="https://github.com/chankxow"
                  className="text-sm text-grey-dark flex items-center"
                >
                  <FaGithub />
                  Chankxow <span></span>
                </a>
                <p
                  className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-black via-indigo-500 to-blue-900 "
                >
                  CESCa#17 Online Camp
                </p>
                <p className="text-grey-darker  text-base">
                  CESCa#17 ค่ายเยาวชนวิศวกรรมคอมพิวเตอร์ (Online camp) โดย
                  สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
                  มหาวิทยาลัยขอนแก่น
                  เป็นค่ายออนไลน์ที่ได้ทำโปรเจคเป็นทีมและได้รับประสบการณ์การเรียนรู้ทางด้านวิศวกรรมคอมพิวเตอร์ระดับเริ่มต้น
                </p>
                <a
                className="btn 
                    flex justify-center mt-4 items-center mx-auto h-10 w-max"
                href="https://github.com/chankxow/Project_matthayom_5"
              >
                <FaGithub />
                READ MORE
              </a>
              </div>
              <div className="flex items-center">
                <div className="text-sm flex mx-auto">
                  <div className=" bg-blue-500  rounded-2xl mr-4 px-5">
                    <p
                      className="font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-black to-red-500"
                    >
                      • ENGINEERING
                    </p>
                  </div>
                  <div className=" bg-blue-600  rounded-2xl mr-4 px-5">
                    <p
                      className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-red-500 to-yellow-500"
                    >
                      • SOFTWARE
                    </p>
                  </div>
                  <div className=" bg-blue-700  rounded-2xl mr-4 px-5">
                    <p
                      className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-yellow-500 to-green-500"
                    >
                      • HARDWARE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
          
        </div>
      </div>
    
  );
};

export default Activity;
