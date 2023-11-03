import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import iceland from "../assets/iceland.jpg";
import iceland2 from "../assets/iceland2.jpg";
import iceland3 from "../assets/iceland3.jpg";

import tun1 from "../assets/tun1.jpg";
import tun2 from "../assets/tun2.jpg";
import tun3 from "../assets/tun3.jpg";
import tun4 from "../assets/tun4.jpg";
import tun5 from "../assets/tun5.jpg";
import tun6 from "../assets/tun6.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import DestinationData from "./DestinationData";
import DestinationData2 from "./DestinationData2";
import DestinationData3 from "./DestinationData3";

import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular destinations</h1>
      <p>
        Embark on extraordinary journeys that unveil a world of wonders, all
        within a carefully orchestrated time frame.
      </p>

      <DestinationData
        className="desc"
        heading="Black Sand Hawaii, USA"
        text=" Located in the Waianapanapa State Park, the black “sand” is made
          mostly from small black rocks. Waianapanapa means “glistening fresh
          water” in Hawaiian, and it’s easy to see where the name came from
          when the black sand is contrasted against the brilliant blue ocean.
          The aesthetic easily makes this one of the most beautiful black-sand
          beaches out here. Thanks to the scenery, this spot is a must-stop
          along the Road to Hana. Take as many pictures as you’d like, but
          save your swimsuit: With the strong surf and frequent jellyfish, opt
          for a more swimmer-friendly beach."
        img1={img1}
        img2={img2}
        img3={img3}
      />
      <DestinationData2
        className="desc-reverse"
        heading2="Landmannalaugar, ICELAND"
        text2=" Landmannalaugar, or the 'People's Pools', is a vast area of stunning and unique beauty in the heart of Iceland's southern Highlands. Throughout the summer, it is one of the most popular places for hiking – either over one day or several – and for natural hot spring bathing.
        Landmannalaugar is a truly rare area, both geologically and aesthetically. The dramatic region can be found nestled beside the raven-black Laugahraun lava field, a sweeping expanse of dried magma that originally formed in an eruption in 1477.Landmannalaugar itself is made up of windswept rhyolite mountains, a rock type that creates a full spectrum of dazzling colors.
        "
        iceland={iceland}
        iceland2={iceland2}
        iceland3={iceland3}
      />
      <DestinationData3
        className="desc"
        heading3="Random places, TUNISIA"
        text3=" There’s so much to see and do in each region of Tunisia: a wide variety of landscapes, a coastline spanning 1,250km, studded with islands and archipelagos, a fantastic array of traditions and customs and a rich historical heritage. We are delighted to introduce you to these regions by breaking them down into three areas: the north, the centre and the south.
        Sapphire-colored sea, velvet sandy beaches, delicious dates, opuntia, charming French boulevards, military forts, ancient medinas — Tunisia is rich in all of this,Tunisia is known for the renowned ruins of ancient Carthage and unique mosaics of antiquity."
        tun1={tun1}
        tun2={tun2}
        tun3={tun3}
        tun4={tun4}
        tun5={tun5}
        tun6={tun6}
      />
    </div>
  );
};

export default Destination;
