import React, { useEffect } from "react";
import '../styles/Popup.scss'; 

const Popup = ({ isOpen, onClose, item }) => {

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup__background"></div>
      <div
        className="popup__container"
        onClick={(e) => e.stopPropagation()}>
        <h2 className="popup__container-header">{item.title}</h2>
        <div className="popup__container-box">
            <img  className="popup__container-img"src={item.image} alt={item.title} />
        <p  className="popup__container-content">{item.text}</p>
        </div>
              <button className="popup__button">ՈՒղարկել հայտ</button>
      </div>

    </div>
  );
};


export default Popup;
