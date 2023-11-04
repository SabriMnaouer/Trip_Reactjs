import "./TripStyles.css";
import TripData from "./TripData";
import kairouan from "../assets/kairouan.jpg";
import tata from "../assets/tata.jpg";
import sidibou from "../assets/sidibou.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent trips</h1>
      <p>
        Explore extraordinary destinations with the help of Google Maps,
        unlocking the beauty of uncharted treasures.{" "}
      </p>
      <div className="tripcard">
        <TripData
          image={kairouan}
          heading="Trip in kairouan,TUNISIA"
          text="Every old city in Tunisia has its own character, and the walled city in the heart of Kairouan is colorful and enchanting. Taking time to wander around this impressive medina is an adventure. It’s still considered the religious and cultural center of Kairouan. The narrow alleys of this medina are famous for appearing in the film Indiana Jones: Raiders of the Lost Ark during the Cairo scenes."
        />
        <TripData
          image={tata}
          heading="Trip in Douiret,TUNISIA"
          text="The Berber village of Douiret is a village in the south-east of Tunisia, located in the governorate of Tataouine, it is 20 kilometers from its capital.
          It is divided into two parts: the old village, made up of troglodyte dwellings dug into the hills, and the new village located on the hillside.
          
          The old village is made up of small dwellings, called ghiren (plural of ghar meaning cave), which bear the family name of their owner."
        />
        <TripData
          image={sidibou}
          heading="Trip in Sidi bou said,TUNISIA"
          text="The entire town is simply beautiful, with flowers draped from almost every wall and doorway, and beautiful flowing vines hanging throughout the entire area. Sidi Bou Said is so beautiful, in fact, that many artists have taken up residence here.The town is also said to have inspired famous artist Paul Klee, and famous writer Andre Gide."
        />
      </div>
    </div>
  );
}

export default Trip;
