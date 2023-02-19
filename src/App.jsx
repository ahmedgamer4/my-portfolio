import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="w-11/12 lg:w-10/12 scroll-smooth min-h-screen flex flex-col items-center m-auto ring-1 ring-opacity-100 ring-zinc-800 bg-zinc-900 absolute z-20 right-0 left-0">
        <div className="min-h-screen  relative">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
      <div
        className="
        w-full
        h-screen
        bg-gradient-to-tr
        from-slate-900
        via-slate-800
        to-cyan-900
        background-animate
        z-10 
        fixed
        "
      ></div>
    </div>
  );
};

export default App;
