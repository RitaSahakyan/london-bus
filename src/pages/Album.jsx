import React, { useState } from "react";
import "../styles/Album.scss";
import "../styles/HomePage.scss";
import img1 from '../assets/Album/1.svg'
import img2 from '../assets/Album/2.svg'
import img3 from '../assets/Album/3.svg'
import img4 from '../assets/Album/4.svg'
import img5 from '../assets/Album/5.svg'
import img6 from '../assets/Album/6.svg'
import img7 from '../assets/Album/7.svg'
import img8 from '../assets/Album/8.svg'
import img9 from '../assets/Album/9.svg'
import img10 from '../assets/Album/10.svg'
import img11 from '../assets/Album/11.svg'
import img12 from '../assets/Album/12.svg'
import img13 from '../assets/Album/13.svg'
import img14 from '../assets/Album/14.svg'
import img15 from '../assets/Album/15.svg'
import img16 from '../assets/Album/16.svg'
import img17 from '../assets/Album/17.svg'
import img18 from '../assets/Album/18.svg'

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18
];

const AlbumSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openSlider = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden"; 
  };

  const closeSlider = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto"; 
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="homepage__groups-album">
      <h1 className="homepage__groups-album-title">Պատկերասրահ</h1>
      <div className="homepage__groups-gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery photo ${index + 1}`}
            className={index % 2 !== 0 ? "down" : ""}
            onClick={() => openSlider(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="slider-overlay" onClick={closeSlider}>
          <button className="close-btn" onClick={closeSlider}>×</button>
          <button className="prev-btn" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
          <img
            src={images[selectedIndex]}
            alt="Selected"
            className="slider-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="next-btn" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
        </div>
      )}
    </div>
  );
};

export default AlbumSlider;