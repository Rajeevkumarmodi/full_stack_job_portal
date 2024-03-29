import React, { Component } from "react";
import HeroCarousel from "../../components/heroCarousel/HeroCarousel";
import SearchBox from "../../components/searchBox/SearchBox";

export class Home extends Component {
  render() {
    return (
      <div className="h-[1000px] bg-gradient-to-r from-blue-200 to-cyan-200">
        <div>
          <HeroCarousel />
        </div>
        <div className="md:mx-[80px] mx-[15px] flex flex-col gap-5 items-center my-10">
          <h2 className="font-bold md:text-5xl text-2xl">
            Find your Daily work now
          </h2>
          <p className="md:text-lg  text-blue-800">
            We connect skilled labourers with contractors seeking their services
          </p>
        </div>
        <div>
          <SearchBox />
        </div>
      </div>
    );
  }
}

export default Home;
