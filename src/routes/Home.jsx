import { Container } from "postcss";
import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className=" text-yellow-400 flex justify-center p-4 text-4xl lg:text-9xl lg:p-6 animate-pulse lg:justify-start">
          Best Products Here!
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:p-20 sm:gap-10 lg:flex lg:justify-between lg:p-10">
        <img
          className=" rounded-full"
          src="https://i.pinimg.com/564x/d7/8b/17/d78b170bd4c84dacf66e8fe3e6bf5684.jpg"
          alt="fish"
        />
        <img
          className=" rounded-full"
          src="https://i.pinimg.com/564x/ec/41/54/ec4154bd3ac3a4adcba94f04eb84a230.jpg"
          alt="Foca"
        />
        <img
          className=" rounded-full"
          src="https://i.pinimg.com/564x/96/99/7a/96997a59673539978206519d34765fa9.jpg"
          alt="pink"
        />
      </div>
    </div>
  );
};

export default Home;
