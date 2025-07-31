import React from "react";
import Marquee from "react-fast-marquee";
import "./ImageScrollQueue.css";
import one from "../assets/1.JPG"

const images = [
  { id: 1, img: {one} },
  { id: 2, img: "../assets/2.jpg" },
  { id: 3, img: "https://tedxhitam.com/2" },
  { id: 4, img: "https://tedxhitam.com/3" },
  { id: 5, img: "https://tedxhitam.com/4" },
  { id: 6, img: "https://tedxhitam.com/5" },
  { id: 7, img: "https://tedxhitam.com/6" },
  { id: 8, img: "https://tedxhitam.com/7" },
  { id: 9, img: "https://tedxhitam.com/8" },
  { id: 10, img: "https://tedxhitam.com/9" },
  { id: 11, img: "https://tedxhitam.com/10" },

];

const ImageScrollQueue = () => {
  return (
    <div className="scroll-wrapper">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="left"
        loop={0}
      >
        {images.map((img, index) => (
          <div className="image-box" key={index}>
            <img src={img} alt={`scroll-${index}`} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ImageScrollQueue;
