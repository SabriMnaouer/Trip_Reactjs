import { Component } from "react";
import "./DestinationStyles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';

class DestinationData2 extends Component {
  render() {
    return (
      <>
        <div className={this.props.className}>
          <div className="desc-text">
            <h2>{this.props.heading2}</h2>
            <p>{this.props.text2}</p>
          </div>
          <div className="image" >
          <Carousel className="carousel"
            axis="horizontal"
            showThumbs={false}
            showArrows={true}          
            dynamicHeight
            >
            <div>
              <img alt="img" src={this.props.iceland} />
            </div>
            <div>
              <img alt="img" src={this.props.iceland2} />
            </div>
            <div>
              <img alt="img" src={this.props.iceland3} />
            </div>
          </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default DestinationData2;

