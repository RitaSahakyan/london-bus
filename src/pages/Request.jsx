import React, { useState, useEffect } from "react";
import '../styles/Request.scss'

const Request = ({ isOpen, onClose }) => {

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",

    });

    const [alert, setAlert] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ՈՒղարկված է", formData);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
            onClose();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="request" onClick={onClose}>
            {alert && <div className="alert">Ձեր հայտը ուղարկված է!</div>}
            <div className="request__background" ></div>

            <form className="request__container" onSubmit={handleSubmit}
            >
                <p className="request__container-header">Ուղարկել հարցում</p>

                <div >
                    <div className="input-wrapper">
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    required
                    value={formData.name}
                    onChange={handleChange}
                    />  
                        <label htmlFor="name">Անուն</label>
                    </div>
                    
                    <div className="input-wrapper">
                    <input
                    type="number"
                    name="phone"
                    placeholder=" "
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    />  
                        <label htmlFor="phone">Հեռախոսահամար</label>
                    </div>
                    <div className="input-wrapper">
                    <input
                    type="email"
                    name="email"
                    placeholder=" "
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    />  
                        <label htmlFor="email">Էլ․ հասցե</label>
                    </div>
                    <div className="input-wrapper">
                    <textarea
                    name="message"
                    placeholder=" "
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    />  
                        <label htmlFor="message">Հաղորդագրություն</label>
                    </div>
                    <button type="submit">Ուղարկել հայտ</button>
                </div>
            </form>
        </div>
    );
};

export default Request;