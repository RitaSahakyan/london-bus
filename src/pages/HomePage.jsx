import React from "react";
import '../styles/HomePage.scss'

const HomePage = () => {
    return(
        <main className="homepage">
            <section id="home" className="homepage__section-home"></section>
            <section id="about" className="homepage__section-about"></section>
            <section id="groups" className="homepage__section-groups"></section>
            <section id="parents" className="homepage__section-parents"></section>
            <section id="ourday" className="homepage__section-ourday"></section>
            <section id="contacts" className="homepage__section-contacts"></section>
        </main>
    );
};

export default HomePage