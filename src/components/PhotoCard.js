import { useEffect, useState } from "react";
import Photos from "../Photos";

const PhotoCard = () => {
    const [reds, setWines] = useState([]);
  
    useEffect(() => {
      fetch("https://api.sampleapis.com/wines/reds")
        .then((response) => response.json())
        .then((data) => setWines(data));
    }, []);
  
    return (
      <section>
        <div className="wine-type">
          <h2>Like or Dislike</h2>
        </div>
        <section className="wine-container">
          {reds.map((red) => (
            <Photos 
            image={red.image}
            />
          ))}
        </section>
      </section>
    );
  };

export default PhotoCard;
