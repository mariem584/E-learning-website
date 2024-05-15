import React from "react";
import Home from "./learningApp/pages/Home/Home";
import Courses from "./learningApp/pages/Courses/Courses";

import "./App.css";
import Blog from "./learningApp/pages/Blog/Blog";
// import UseState from "./Reacthooks/UseState";
import AboutUs from './learningApp/pages/AboutUs/AboutUs'
import Cards from "./components/Cards";

const App = () => {
  return (
    <div>
      {/* <Blog/>       */}
      {/* <Courses/> */}

      {/* <UseState/> */}
      {/* <Home/> */}
      {/* <AboutUs/> */}
      <Cards game={'first title'} decs={'desc 1'}/>
      <Cards game={'sec title'} decs={'desc 2'}/>
      
    </div>
  );
};

export default App;
