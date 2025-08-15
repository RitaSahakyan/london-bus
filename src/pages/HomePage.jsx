import React from "react";
import '../styles/HomePage.scss'
import HomeImage from '../assets/Home/home-children.svg'
import HomeCloudS from '../assets/Home/cloud_s.svg'
import HomeCloudB from '../assets/Home/sloud_xl.svg'
import HomeArrow from '../assets/Home/arr.svg'
import AboutGirl from '../assets/About/girl.svg'
import AboutRainbow from '../assets/About/rainbow.svg'
import AboutIconGames from '../assets/About/icon-games.svg'
import AboutIconConc from '../assets/About/icon-concentration.svg'
import AboutIconEnter from '../assets/About/icon-enter.svg'
import AboutIconEnv from '../assets/About/icon-env.svg'
import AboutPlane from '../assets/About/plane.svg'


const HomePage = () => {
    return(
        <main className="homepage">
            <section id="home" className="homepage__section homepage__home">
                <div className="homepage__home-block">
                    <h1  className="homepage__home-title">Լավագույն վայրը <br></br> Ձեր երեխաների համար</h1>
                    <img src={HomeImage} alt="Children are playing" className="homepage__home-children" />
                </div>
                <div className="homepage__home-btnbox">
                    <button className="homepage__home-btn">Եկեք ծանոթանանք</button>
                    <img src={HomeArrow} alt="Arrow Down" className="homepage__home-arrow"/>
                </div>
            </section>
            <section id="about" className="homepage__section homepage__about">
                <h1 className="homepage__about-title">Մանկական զարգացման կենտրոն <br />LONDON BUS </h1>
                <div className="homepage__about-content">
                    <div className="homepage__about-girlimg"/>
                    <p className="homepage__about-text">
                        Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: <br /><br />
                        Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչ թե շատ իրականի նման, ի տարբերություն «Բովանդակություն, բովանդակություն» սովորական կրկննության, ինչը ընթերցողի համար հասկանալի է: <br /><br />
                        Շատ համակարգչային տպագրական ծրագրեր և ինտերնետային էջերի խմբագրիչներ այն օգտագործում են որպես իրենց ստանդարտ տեքստային մոդել, և հետևապես, ինտերնետում Lorem Ipsum-ի որոնման արդյունքում կարելի է հայտնաբերել էջեր, որոնք դեռ նոր են կերտվում: <br /><br />
                        Ժամանակի ընթացքում ձևավորվել են Lorem Ipsum-ի տարբեր վերսիաներ` երբեմն ներառելով պատահական տեքստեր, երբեմն էլ հատուկ իմաստ (հումոր և նմանատիպ բովանդակություն):
                        </p>
                </div>
                <div className="homepage__about-adv">
                    <div className="homepage__about-adv-item">
                        <div className="homepage__about-adv-header">
                            <img src="" alt="" />
                            <h3></h3>
                        </div>
                        <div className="homepage__about-adv-list">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="homepage__about-adv-item">
                        <div className="homepage__about-adv-header">
                            <img src="" alt="" />
                            <h3></h3>
                        </div>
                        <div className="homepage__about-adv-list">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        
                    </div><div className="homepage__about-adv-item">
                        <div className="homepage__about-adv-header">
                            <img src="" alt="" />
                            <h3></h3>
                        </div>
                        <div className="homepage__about-adv-list">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        
                    </div><div className="homepage__about-adv-item">
                        <div className="homepage__about-adv-header">
                            <img src="" alt="" />
                            <h3></h3>
                        </div>
                        <div className="homepage__about-adv-list">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="groups" className="homepage__section homepage__groups"></section>
            <section id="parents" className="homepage__section homepage__parents"></section>
            <section id="ourday" className="homepage__section homepage__ourday"></section>
            <section id="contacts" className="homepage__section homepage__contacts"></section>
        </main>
    );
};

export default HomePage;