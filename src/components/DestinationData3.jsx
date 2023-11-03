import { Component } from "react";
import "./DestinationStyles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';

class DestinationData3 extends Component {
  render() {
    return (
      <>
        <div className={this.props.className}>
          <div className="desc-text">
            <h2>{this.props.heading3}</h2>
            <p>{this.props.text3}</p>
          </div>
          <div className="image" >
          <Carousel className="carousel"
            axis="horizontal"
            showThumbs={false}
            showArrows={true}          
            dynamicHeight
            >
            <div>
              <img alt="img" src={this.props.tun1} />
            </div>
            <div>
              <img alt="img" src={this.props.tun2} />
            </div>
            <div>
              <img alt="img" src={this.props.tun6} />
            </div>
            <div>
              <img alt="img" src={this.props.tun4} />
            </div><div>
              <img alt="img" src={this.props.tun5} />
            </div><div>
              <img alt="img" src={this.props.tun3} />
            </div>
          </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default DestinationData3;

