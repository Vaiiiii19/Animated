import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tighter pr-[10vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className=" flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
            <h1 className="text-7xl">Our approach :</h1>
            <button className=" flex uppercase gap-10 items-center px-10 py-6  bg-zinc-900 mt-10 rounded-full text-white">Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')] "></div>
      </div>
    </div>
  );
}

export default About;
