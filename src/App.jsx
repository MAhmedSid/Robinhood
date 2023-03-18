import React from "react";


import "./App.css";
import Header from "./Header";
import Newsfeed from "./Newsfeed";
import Stats from "./Stats";

const App = () => {
  return (
    <div>
      <div className="app__Header">
        <Header />
      </div>

      <div className="app__body flex justify-center  w-full h-[600px]">
        <div className="app_container flex  w-[1024px] xl:w-[1280px] h-full px-12 pt-10 gap-5 ">
          <Newsfeed />
          <Stats />
        </div>
      </div>

      {/* BODY  */}
    </div>
  );
};

export default App;
