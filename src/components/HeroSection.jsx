import React from "react";
import heroImg from "../images/Frame 15.png";
import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import vector1 from "../icons/Vector.svg";
import vector2 from "../icons/Vector (1).svg";
import vector3 from '../icons/Vector (2).svg'
import layer from "../images/layer.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex   bg-gradient-to-br from-[#ffe3d9] via-white to-white">
      <div className="flex xl:gap-4 sm:gap-[4rem] items-center justify-between sm:max-w-none xl:max-w-[68rem] px-4 mx-auto xl:flex-nowrap sm:flex-wrap">
        <div className=" flex flex-col xl:basis-[50%] xl:pt-0 sm:pt-20 sm:basis-[100%]">
          <div className="bg-white rounded-[40px]  font-lexend font-[500] w-[12rem] flex items-center justify-center xl:mb-6 sm:mb-4  pt-4 pb-3 px-6">
            <p className="text-[0.75rem] text-pink flex gap-3 font-[700]">
              Explore the world! <FaBriefcase className="text-[0.85rem]" />
            </p>
          </div>
          <h1 className="xl:text-[3.8rem] sm:text-[2.4rem] font-[500]  font-lexend max-w-[25rem] sm:leading-[3.6rem] xl:leading-[5.1rem]">
            Travel <span className="text-pink">top destination</span> of the
            world
          </h1>
          <p className=" font-lexend text-[0.95rem] xl:mt-6 sm:mt-3 font-[600] max-w-[25rem] leading-7 text-[#191825] opacity-50">
            We always make our customer happy by providing as many choices as
            possible.
          </p>
          <div className="btns flex gap-4 xl:mt-10 sm:mt-6">
            <Link>
              <button className="h-[2.8rem] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] w-[9rem] rounded-[70px] flex items-center justify-center text-[0.85rem] text-white font-lexend font-[500] bg-[#5d50c6]">
                Get Started
              </button>
            </Link>
            <Link>
              <button className="h-[2.8rem] w-[10rem] rounded-[70px] flex items-center justify-center text-[0.85rem] text-black font-lexend font-[800] border gap-2">
                <FaCirclePlay className="text-[#5d50c6] text-[1rem] mt-[-0.2rem]" />{" "}
                Watch Demo
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-img xl:basis-[50%] sm:basis-[100%] relative">
          <img
            src={layer}
            className="absolute top-[-2rem] left-[-4rem]"
            alt=""
          />
          <div className="absolute  w-14 h-14 rounded-full left-[-2rem] z-50 top-[14rem] sm:hidden xl:flex items-center justify-center bg-pink">
            <img src={vector1} className="w-6" alt="" />
          </div>
          <div className="absolute w-14 h-14 rounded-full right-[7rem] z-50 bottom-0 sm:hidden xl:flex items-center justify-center bg-[#ff5722]">
            <img src={vector2} className="w-5" alt="" />
          </div>
          <div className="absolute w-[9rem] h-[3rem] rounded-[60px] right-[-6rem] z-50 bottom-[10rem] sm:hidden xl:flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] gap-2  text-[0.9rem] text-black font-josefin font-[700] justify-center bg-white">
            <img src={vector3} className="w-3" alt="" /> <p>Top places</p>
          </div>

          <img src={heroImg} className="z-30  relative" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
