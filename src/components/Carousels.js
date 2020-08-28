import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Cards from "./cards";
import breakPoints from "./breakPoints";

class Carousels extends Component {
  render() {
    return (
      <div>
        <Carousel breakPoints={breakPoints}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Carousel>
        <Carousel breakPoints={breakPoints}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Carousel>
      </div>
    );
  }
}

export default Carousels;
