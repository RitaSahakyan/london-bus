import React, { useRef, useEffect } from "react";
import "../styles/Footer.scss";
import F from "../assets/Footer/F.svg"
import I from "../assets/Footer/I.svg"
import X from "../assets/Footer/X.svg"
import Y from "../assets/Footer/Y.svg"


const Footer = () =>{

     const containerRef = useRef(null); 
    
      useEffect(() => {
        const container = containerRef.current;
        const icons = document.querySelectorAll('.parallax');
    
        if (!container) return; 
    
        const handleMouseMove = (e) => {
          const { width, height, left, top } = container.getBoundingClientRect();
          const x = e.clientX - left - width / 2;
          const y = e.clientY - top - height / 2;
    
          icons.forEach((icon, i) => {
            const factor = (i + 1) * 0.02;
            icon.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
          });
        };
    
        container.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          container.removeEventListener('mousemove', handleMouseMove); 
        };
      }, []);

    return(
        <footer className="footer container" ref={containerRef}>
            <div className="footer_contacts">
                <p className="footer__contacts-bold">Հայաստան, Երևան, Նալբանդյան փող 50, բն {"#"}103</p>
                <p className="footer__contacts-bold">londonbus@gmail.com</p>
                <p className="footer__contacts-bold">+374 (010) 60 - 88 - 89</p>
                <p className="footer__contacts-light">Հետևեք մեզ</p>
                <div className="footer__contacts-icons">
                    <div className="footer__contacts-f">
                        <a href="https://www.facebook.com/profile.php?id=61575895713847&mibextid=wwXIfr&rdid=mVnyGD1JX198mcZ3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16mpebAyCw%2F%3Fmibextid%3DwwXIfr#"><img src={F} alt="website" /></a>
                        
                    </div>
                    <div className="footer__contacts-x">
                        <a href="#"><img src={X} alt="website" /></a>
                    </div>
                    <div className="footer__contacts-i">
                        <a href="https://www.instagram.com/london_bus_kindergarten?igsh=YXl2djQzbno5YmYx"><img src={I} alt="website" /></a>
                    </div>
                    <div className="footer__contacts-y">
                        <a href="#"><img src={Y} alt="website" /></a>
                    </div>
                </div>
                <p className="footer__contacts-regular">© Londonbus 2025</p>
                <p className="footer__contacts-regular">Լենդինգների պատրաստում ԱՍՏՈՒԴԻՈ ՍՊԸ</p>
            </div>
            <div className="footer-bgdots"></div>
            <div className="footer-icon1 parallax"></div>
            <div className="footer-icon2 parallax"></div>
            <div className="footer-icon3 parallax"></div>
        </footer>
    );
}

export default Footer;