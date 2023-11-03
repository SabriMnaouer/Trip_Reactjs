import { Component } from "react";
import "./DestinationStyles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';

class DestinationData extends Component {
  render() {
    return (
      <>
        <div className={this.props.className}>
          <div className="desc-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className="image" >
          <Carousel className="carousel"
            axis="horizontal"
            showThumbs={false}
            showArrows={true}          
            dynamicHeight
            >
            <div>
              <img alt="img" src={this.props.img1} />
            </div>
            <div>
              <img alt="img" src={this.props.img2} />
            </div>
            <div>
              <img alt="img" src={this.props.img3} />
            </div>
          </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default DestinationData;

