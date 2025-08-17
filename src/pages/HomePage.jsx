import React from "react";
import '../styles/HomePage.scss'
import HomeImage from '../assets/Home/home-children.svg'
import HomeArrow from '../assets/Home/arr.svg'
import AboutIconGames from '../assets/About/icon-games.svg'
import AboutIconConc from '../assets/About/icon-concentration.svg'
import AboutIconEnter from '../assets/About/icon-enter.svg'
import AboutIconEnv from '../assets/About/icon-env.svg'
import Group1 from '../assets/Groups/Baby1.svg'
import Group2 from '../assets/Groups/Baby2.svg'
import Group3 from '../assets/Groups/Baby3.svg'
import Group4 from '../assets/Groups/Baby.svg'
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
                    <div className="homepage__about-plane"></div>
                </div>
                <div className="homepage__about-adv">
                    <div className="homepage__about-adv-item">
                        <div className="homepage__about-adv-header">
                            <img src={AboutIconGames} alt="Games" />
                            <h3>Փոքրիկների զարգացում՝ խաղեր</h3>
                        </div>
                        <div className="homepage__about-adv-text">
                            <p>շարժում և խմբային ակտիվություններ, որոնք աստիճանաբար խթանում են ինքնուրույնությունը:</p>
                        </div>
                        
                    </div>
                    <div className="homepage__about-adv-item">
                        <div className="homepage__about-adv-header">
                            <img src={AboutIconEnter} alt="Entertainment" />
                            <h3>անցկացնել ուրախ և արդյունավետ ժամանց</h3>
                        </div>
                        <div className="homepage__about-adv-text">
                            <p>Սովորել մանկապարտեզին անհրաժեշտ հմտություններ խաղերի միջոցո</p>
                        </div>
                    </div>
                    <div className="homepage__about-adv-item">
                        <div className="homepage__about-adv-header">
                            <img src={AboutIconConc} alt="Concentration" />
                            <h3>Զարգացնել ուշադրության կենտրոնացումը</h3>
                        </div>
                        <div className="homepage__about-adv-text">
                            <p>Oգնել երեխային` հեշտությամբ հաղթահարել առաջին  քայլերը դեպի դպրոց.</p>
                        </div>    
                    </div>
                    <div className="homepage__about-adv-item">
                        <div className="homepage__about-adv-header">
                            <img src={AboutIconEnv} alt="Environment" />
                            <h3>Հանգիստ և վստահ միջավայր՝</h3>
                        </div>
                        <div className="homepage__about-adv-text">
                        <p>փոքրիկը սովորում է շփվել իր հասակակիցների հետ, կարող եք վստահ լինել, որ նա ապահով է:</p>                            
                        </div>
                    </div>
                </div>
            </section>
            <section id="groups" className="homepage__section homepage__groups">
                <div className="homepage__groups-plane"></div>
                <div className="homepage__groups-heading">
                    <h1 className="homepage__groups-title">Խմբեր</h1>
                    <div className="homepage__groups-heading-icon1"></div>
                    <div className="homepage__groups-heading-icon2"></div>
                    <div className="homepage__groups-heading-icon3"></div>
                    <div className="homepage__groups-heading-icon4"></div>
                </div>
                <div className="homepage__groups-lessons">
                    <div className="homepage__groups-lesson">
                        <img src={Group1} alt="lesson" />
                        <div className="homepage__groups-lesson-text">Նախադպրոցական խումբ</div>
                    </div>
                    <div className="homepage__groups-lesson">
                        <img src={Group2} alt="lesson" />
                        <div className="homepage__groups-lesson-text">2-4Տ․ Զարգացման խումբ</div>
                    </div>
                    <div className="homepage__groups-lesson">
                        <img src={Group3} alt="lesson" />
                        <div className="homepage__groups-lesson-text">Անգլերենի դասընթացներ</div>
                    </div>
                    <div className="homepage__groups-lesson">
                        <img src={Group4} alt="lesson" />
                        <div className="homepage__groups-lesson-text">Ռուսերենի  դասընթացներ</div>
                    </div>
                </div>
                <div className="homepage__groups-bg-pics">
                    <div className="homepage__groups-bigclouds">
                        <p></p>
                    </div>
                    <div className="homepage__groups-bus"></div>
                    <div className="homepage__groups-polygon"></div>
                </div>
                <div className="homepage__groups-reserve">
                    <div className="homepage__groups-content">
                        <h3>Ամրագրեք ձեր երեխայի տեղը հիմա</h3>
                        <h1>LONDON BUS</h1>
                        <h2>+374 (010) 60 - 88 - 89</h2>
                        <button>ՈՒղարկել հայտ</button>
                    </div>
                    <div className="homepage__groups-bgdots"></div>
                    <div className="homepage__groups-smallclouds"></div>
                    <div className="homepage__groups-icon1"></div>
                    <div className="homepage__groups-icon2"></div>
                    <div className="homepage__groups-icon3"></div>
                    <div className="homepage__groups-icon4"></div>
                </div>
                <div className="homepage__groups-album">
                    <h1 className="homepage__groups-album-title">Պատկերասրահ</h1>
                    <div className="homepage__groups-gallery">
                        <img src={img1} alt="Gallery photo" />
                        <img src={img2} alt="Gallery photo" className="down"/>
                        <img src={img3} alt="Gallery photo" />
                        <img src={img4} alt="Gallery photo" className="down"/>
                        <img src={img5} alt="Gallery photo" />
                        <img src={img6} alt="Gallery photo" className="down"/>
                        <img src={img7} alt="Gallery photo" />
                        <img src={img8} alt="Gallery photo" className="down"/>
                        <img src={img9} alt="Gallery photo" />
                        <img src={img10} alt="Gallery photo" className="down"/>
                        <img src={img11} alt="Gallery photo" />
                        <img src={img12} alt="Gallery photo" className="down"/>
                        <img src={img13} alt="Gallery photo" />
                        <img src={img14} alt="Gallery photo" className="down"/>
                        <img src={img15} alt="Gallery photo" />
                        <img src={img16} alt="Gallery photo" className="down"/>
                        <img src={img17} alt="Gallery photo" />
                        <img src={img18} alt="Gallery photo" className="down"/>
                    </div>
                </div>
            </section>
            <section id="parents" className="homepage__section homepage__parents"></section>
            <section id="ourday" className="homepage__section homepage__ourday"></section>
            <section id="contacts" className="homepage__section homepage__contacts"></section>
        </main>
    );
};

export default HomePage;