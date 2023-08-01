import React from "react";
//img
import SchoolLogo from "../assets/stp-logo.png";
import profile from "../assets/img-profile.png";
// motion
import CountUp from "react-countup";
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//intereaction
const About = () => {
  return (
    <section
      id="about"
      className="section mx-auto max-w-max mx-h-max block"
    >
      <div className="container">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-5 "
        >
          -MY JOURNEY-
        </motion.h1>

        <div className="f-anupan text-black ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="py-6 text-center items-center block"
          >
            <img src={SchoolLogo} alt="" className="mx-auto text-[40px]" />
            <div className="hover:scale-[105%] transition-all ease-in-out duration-200">
              <a
                href="http://srithatpit.ac.th/wcms/"
                className="text-transparent bg-gradient-to-br bg-clip-text
     from-black to-yellow-500 text-[48px] font-bold "
              >
                โรงเรียนศรีธาตุพิทยาคม
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <p>
              สวัสดีครับ, ผม นายเกียรติภูมิ พละสาร หรือชื่อเล่นว่า ภูมิ ครับ
              เป็นนักเรียนจากโรงเรียนศรีธาตุพิทยาคม จังหวัดอุดรธานี ห้องเรียน
              วิทย์-คณิต
            </p>
            <p>
              ผมมีความชื่นชอบในด้านการเขียนโค้ดโปรแกรมมิ่ง การออกแบบเว็บไซต์
              การพัฒนาระบบ<span> IOT </span>
              และมีความใฝ่ฝันที่อยากจะเรียนต่อทางด้านวิศวกรรมคอมพิวเตอร์
            </p>
          </motion.div>
        </div>
      </div>
      <div className="w-max mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h1
            className="text-black text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-green-500 to-blue-500 py-10"
          >
            {"<"} ABOUT ME {"/>"}
          </h1>
        </motion.div>
      </div>

      <div className="mx-auto flex">
        <div className="flex flex-col gap-y-10 lg:flex-row h-max">
          <div className="mx-auto hover:scale-[105%] transition-all duration-300 h-[400px]">
          <div class="profile-img">
  <b className=""></b>
  <div class="content">
    <p class="title">Some FomousCreative Designer</p>
    <ul class="sci">
      <li>
        <a href="#">
          <svg class="fa-brands fa-facebook" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
        </a>
      </li>

      <li>
        <a href="#">
          <svg class="fa-brands fa-twitter" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
        </a>
      </li>

      <li>
        <a href="#">
          <svg class="fa-brands fa-linkedin-in" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
        </a>
      </li>

      <li>
        <a href="#">
          <svg class="fa-brands fa-instagram" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
        </a>
      </li>
    </ul>
  </div>
</div>
          </div>

          <motion.div
          variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
          >
            <div className="mx-auto block p-8 f-anupan">
              <h1
                className="text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
              >
                NAME
              </h1>
              <div>
                <p
                  className="text-[20px] text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500"
                >
                  Poom ,Kiatipoom Palasan{" "}
                </p>
              </div>
              <h1
                className=" text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
              >
                SKILL
              </h1>
              <div>
                <p></p>
              </div>

              <h1
                className="text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
              >
                BIRHDAY
              </h1>
              <div>
                <p
                  className="text-[20px] text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500"
                >
                  <CountUp
                    className=" text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500 text-[20px] "
                    start={0}
                    end={30}
                    duration={5}
                  />{" "}
                  Jan{" "}
                  <CountUp
                    className=" text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500 text-[20px] "
                    start={0}
                    end={200}
                    duration={5}
                  />
                  <CountUp
                    className=" text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500 text-[20px] "
                    start={0}
                    end={5}
                    duration={5}
                  />
                </p>
              </div>
              <h1
                className="text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
              >
                ADDRESS
              </h1>
              <div
                className="text-[20px] text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500"
              >
                <p className="">77 หมู่ 4 ซอย 7 บ้านเลิงถ่อนโนนสมบูรณ์ ตำบลหนองหญ้าไซ</p>
                <p>อำเภอวังสามหมอ จังหวัดอุดรธานี 41280</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
