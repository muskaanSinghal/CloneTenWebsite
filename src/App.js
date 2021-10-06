import React from "react";
import AboutUs from "./Components/AboutUs/AboutUs";
import Additional from "./Components/Additional/Additional";
import Banner from "./Components/Banner/Banner";
import Benefits from "./Components/Benefits/Benefits";
import Extra from "./Components/Extra/Extra";
import FirstImage from "./Components/FirstImage/FirstImage";
import MainHeader from "./Components/Header/MainHeader";
import Join from "./Components/Join/Join";
import Navigation from "./Components/Navigation/Navigation";
import Slider from "./Components/Slider/Slider";

const App = function () {
  return (
    <React.Fragment>
      <MainHeader />
      <Navigation />
      <FirstImage />
      <AboutUs />
      <Join />
      <Additional />
      <Extra />
      <Banner />
      <Benefits />
      <Slider />
    </React.Fragment>
  );
};
export default App;
