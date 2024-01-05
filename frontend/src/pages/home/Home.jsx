import React, { Component } from "react";
import HeroCarousel from "../../components/heroCarousel/HeroCarousel";

export class Home extends Component {
  render() {
    return (
      <div className="h-[1000px]">
        <div>
          <HeroCarousel />
        </div>
      </div>
    );
  }
}

export default Home;
