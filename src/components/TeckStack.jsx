import React from "react";

const TeckStack = () => {
  return (
    <div className="mt-9">
      <h1 className="text-3xl font-bold sm:text-4xl mb-14">The Tech I Use</h1>
      <div className="tech-wrapper text-4xl md:text-6xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto gap-y-3">
        <div className="flex flex-col gap-4">
          <i className="devicon-javascript-plain colored"></i>
          <p className="text-xs uppercase">JavaScript</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-typescript-plain colored"></i>
          <p className="text-xs uppercase">TypeScript</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-react-original colored"></i>
          <p className="text-xs uppercase">react</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-nodejs-plain-wordmark colored"></i>
          <p className="text-xs uppercase">node js</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-css3-plain-wordmark colored"></i>
          <p className="text-xs uppercase">css</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-tailwindcss-plain colored"></i>
          <p className="text-xs uppercase">tailwind css</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-html5-plain-wordmark colored"></i>
          <p className="text-xs uppercase">html 5</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-python-plain-wordmark colored"></i>
          <p className="text-xs uppercase">python</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-express-original white"></i>
          <p className="text-xs uppercase">express</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-git-plain-wordmark colored"></i>
          <p className="text-xs uppercase">git</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-webpack-plain colored"></i>
          <p className="text-xs uppercase">webpack</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-jest-plain colored"></i>
          <p className="text-xs uppercase">jest</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-vim-plain colored"></i>
          <p className="text-xs uppercase">vim</p>
        </div>
        <div className="flex flex-col gap-4">
          <i className="devicon-mongodb-plain colored"></i>
          <p className="text-xs uppercase">mongo db</p>
        </div>
      </div>
    </div>
  );
};

export default TeckStack;
