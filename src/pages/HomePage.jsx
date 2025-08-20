import React, { useRef, useEffect, useState } from "react";
import Request from "./Request";
import Popup from "./Popup";
import AlbumSlider from "./Album";
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
import brackets from '../assets/Parents-about-us/brackets.svg'
import Armine1 from '../assets/Parents-about-us/parent-1.svg'
import Armine2 from '../assets/Parents-about-us/parent-2.svg'
import Armine3 from '../assets/Parents-about-us/parent-1.svg'
import Armine4 from '../assets/Parents-about-us/parent-3.svg'
import Baby1 from '../assets/Our day/day-1.svg'
import Baby2 from '../assets/Our day/day-2.svg'
import Baby3 from '../assets/Our day/day-3.svg'
import Baby4 from '../assets/Our day/day-4.svg'
import QuestionImg from '../assets/Our day/questions image.svg'
import Accordion from "../components/Accordion";


/* Խմբերի փոփափ */

const popups = [
    {id: 1, title: "Նախադպրոցական խումբ", image: Group1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni velit minima! Quaerat eligendi, at neque consequuntur fugiat a quo et earum, similique delectus explicabo cupiditate aliquid voluptatum magnam, eos maxime reiciendis facere! Et eum dicta vitae cum repellat sit consequuntur. Itaque, autem maiores? Aut impedit, aperiam magni corporis magnam neque laborum recusandae maiores quae, libero provident dignissimos aspernatur! Saepe?"},
    {id: 2, title: "2-4Տ․ Զարգացման խումբ", image: Group2, text: "Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է: Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան:"},
    {id: 3, title: "Անգլերենի դասընթացներ", image: Group3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni velit minima! Quaerat eligendi, at neque consequuntur fugiat a quo et earum, similique delectus explicabo cupiditate aliquid voluptatum magnam, eos maxime reiciendis facere! Et eum dicta vitae cum repellat sit consequuntur. Itaque, autem maiores? Aut impedit, aperiam magni corporis magnam neque laborum recusandae maiores quae, libero provident dignissimos aspernatur! Saepe?"},
    {id: 4, title: "Ռուսերենի  դասընթացներ", image: Group4, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni velit minima! Quaerat eligendi, at neque consequuntur fugiat a quo et earum, similique delectus explicabo cupiditate aliquid voluptatum magnam, eos maxime reiciendis facere! Et eum dicta vitae cum repellat sit consequuntur. Itaque, autem maiores? Aut impedit, aperiam magni corporis magnam neque laborum recusandae maiores quae, libero provident dignissimos aspernatur! Saepe?"},

];

const HomePage = () => {
/* Խմբերի փոփափ */
const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

/*Հաճախ տրվող հարցերի դատա*/ 
    const items = [
    {title: "Ինչու՞ մեր ծրագիրը ?", content: "London Bus մանկական զարգացման կենտրոնում յուրաքանչյուր երեխայի՝ խաղալու, սովորելու և զարգանալու ընթացքը կազմակերպված է սիրով, հոգատարությամբ և փորձագիտական մոտեցմամբ։Մեր աշխատանքային մոտեցումը հիմնված է հետևյալ սկզբունքների վրա՝ Մենք սկսում ենք երեխայի կարիքների գնահատումից։ Յուրաքանչյուր նոր գրանցման դեպքում մեր մասնագետները դիտարկում են երեխայի տարիքը, զարգացման փուլը և լեզվական կարողությունները՝ ձևավորելով նրան համապատասխան խումբ։"},
    {title: "Ինչ ծրագրեր են գործում Լոնդոն բասում ?", content: "Լոնդոն բասում գործում է «Նախապատրաստում մանկապարտեզին» ծրագիրը՝ նախատեսված 2-4 տարեկան երեխաների համար։Մեր նպատակն է օգնել փոքրիկներին՝ Հարմարվել նոր միջավայրին, Զարգացնել ինքնուրույնության հմտությունները,  Խթանել հաղորդակցությունն ու սոցիալականացումը, Սովորել մանկապարտեզին անհրաժեշտ հմտություններ խաղերի միջոցով"},
    {title: "Ինչ է Baby plus mommy  ծրագիրը ?", content: "Baby plus mommy &nbsp;ծրագրում ներառված են՝ զարգացնող խաղեր՝ գունավոր խաղալիքներով, պլաստիլինով, զանազան սենսորիկ նյութերով, երաժշտական խաղեր, երգ ու պար՝ խոսքի և լսողության խթանման համար, մատների և մարմնի շարժումների վարժություններ՝ ֆիզիկական կոորդինացիայի համարԱնգլերեն բառերի ու արտահայտությունների ճանաչում խաղերի միջոցով։"},
    {title: "Քանի՞ տարեկանից է ընդունելությունը ? ", content: "Լոնդոն Բասում գործում է «Նախապատրաստում մանկապարտեզին» ծրագիրը՝ նախատեսված 2-4 տարեկան երեխաների համար։Մեր նպատակն է օգնել փոքրիկներին՝ Հարմարվել նոր միջավայրին, զարգացնել ինքնուրույնության հմտությունները,  խթանել հաղորդակցությունն ու սոցիալականացումը, սովորել մանկապարտեզին անհրաժեշտ հմտություններ խաղերի միջոցով։Երեխան ավելի վստահ է զգում, երբ մոր ներկայությամբ բացահայտում է նոր միջավայր և ստեղծվում է ուժեղ էմոցիոնալ կապ մայրիկի և փոքրիկի միջև։"},
    {title: "երբ կմեկնարկի է «English for kids» ծրագիրը ?", content: ""}
];

const [isOpen, setIsOpen] = useState(false);

/*Շարժվող իկոնկաներ*/ 

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
            <section id="groups" className="homepage__section homepage__groups container" ref={containerRef}>
                <div className="homepage__groups-plane"></div>
                <div className="homepage__groups-heading">
                    <h1 className="homepage__groups-title">Խմբեր</h1>
                    <div className="homepage__groups-heading-icon1 "></div>
                    <div className="homepage__groups-heading-icon2 "></div>
                    <div className="homepage__groups-heading-icon3 "></div>
                    <div className="homepage__groups-heading-icon4 "></div>
                </div>
                <div className="homepage__groups-lessons">
                    {popups.map((item) => ( 
                    <div
                        key={item.id}
                        className="homepage__groups-lesson"
                        onClick={() => handleClick(item)}
                    >
                        <img src={item.image} alt={item.title} />
                        <h3 className="homepage__groups-lesson-text">{item.title}</h3>
                    </div>
                    ))}
                    <Popup isOpen={isOpen} onClose={handleClose} item={selectedItem}/>
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
                        <button onClick={() => setIsOpen(true)}>ՈՒղարկել հայտ</button>
                    </div>
                    <div className="homepage__groups-bgdots"></div>
                    <div className="homepage__groups-smallclouds"></div>
                    <div className="homepage__groups-icon1 parallax"></div>
                    <div className="homepage__groups-icon2 parallax"></div>
                    <div className="homepage__groups-icon3 parallax"></div>
                    <div className="homepage__groups-icon4 parallax"></div>
                </div>
                <div className="homepage__groups-album">
                    <AlbumSlider />
                </div>
            </section>
            <section id="parents" className="homepage__section homepage__review container" /*ref={containerRef}*/>
                <h1>Ծնողները մեր մասին</h1>
                <div className="homepage__review-container">
                    <div className="homepage__review-box">
                        <div className="homepage__review-content">
                            <img src={brackets} alt="" />
                            <div className="homepage__review-text">London Bus - ում երեխաների ժամանակը շատ ուրախ և արդյունավետ է անցնում ! Շնորհակալ ենք ! </div>
                        </div>
                        <div className="homepage__review-parent">
                            <img src={Armine1} alt="" />
                            <span >Կիրակոսյան Արմինե</span>
                        </div>
                    </div>
                    <div className="homepage__review-box">
                        <div className="homepage__review-content">
                            <img src={brackets} alt="" />
                            <div className="homepage__review-text">Մեր սիրելի London Bus շնորհակալ ենք գեղեցիկ ու պայծառ օրվա համար</div>
                        </div>
                        <div className="homepage__review-parent">
                            <img src={Armine2} alt="" />
                            <span >Կիրակոսյան Արմինե</span>
                        </div>
                        
                    </div>
                    <div className="homepage__review-box">
                        <div className="homepage__review-content">
                            <img src={brackets} alt="" />
                            <div className="homepage__review-text">London Bus - ում երեխաների ժամանակը շատ ուրախ և արդյունավետ է անցնում ! Շնորհակալ ենք ! </div>
                        </div>
                        <div className="homepage__review-parent">
                            <img src={Armine3} alt="" />
                            <span >Կիրակոսյան Արմինե</span></div>
                        </div>
                    <div className="homepage__review-box">
                        <div className="homepage__review-content">
                            <img src={brackets} alt="" />
                            <div className="homepage__review-text">London Bus - ում երեխաների ժամանակը շատ ուրախ և արդյունավետ է անցնում ! Շնորհակալ ենք ! </div>
                        </div>
                        <div className="homepage__review-parent">
                            <img src={Armine4} alt="" />
                            <span >Կիրակոսյան Արմինե</span>
                        </div>
                    </div>
                    <div className="homepage__review-clouds"></div>
                    <div className="homepage__review-plane parallax"></div>
                </div>
            </section>
            <section id="ourday" className="homepage__section homepage__ourday">
                <h1>Մեր առօրյան</h1>
                <div className="homepage__ourday-container">
                    <div className="homepage__ourday-box">
                        <img src={Baby1} alt="" />
                        <p>Մենք փոփոխություն ենք մտցնում երեխայի կյանքում</p>
                    </div>
                    <div className="homepage__ourday-box">
                        <img src={Baby2} alt="" />
                        <p>Երեխաների խնամք նոր դասերով</p>
                    </div>
                    <div className="homepage__ourday-box">
                        <img src={Baby3} alt="" />
                        <p>Մենք փոփոխություն ենք մտցնում երեխայի կյանքում</p>
                    </div>
                    <div className="homepage__ourday-box">
                        <img src={Baby4} alt="" />
                        <p>Մենք փոփոխություն ենք մտցնում երեխայի կյանքում</p>
                    </div>
                </div>
                <div className="homepage__ourday-questionbox">
                    <img src={QuestionImg} alt="" />
                    <div className="homepage__ourday-qustions">
                        <h1>Հաճախ տրվող հարցեր</h1>
                        <Accordion data={items} />
                    </div>
                </div>
            </section>
            <section id="contacts" className="homepage__section homepage__contacts container" /*ref={containerRef}*/ >
                <div className="homepage__contacts-info">
                <div className="homepage__contacts-num">
                    <h3>Պատվիրել զանգ</h3>
                    <h1>LONDON BUS</h1>
                    <h2>+374 (010) 60 - 88 - 89</h2>
                    <button onClick={() => setIsOpen(true)} >ՈՒղարկել հայտ</button>

                </div>
                <div >
                    <iframe className="homepage__contacts-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.310406826141!2d44.5182504!3d40.1801797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce53353cbf1%3A0x9f64874cd8d5f7e7!2s50%20Nalbandyan%20poxoc%2C%20Yerevan!5e0!3m2!1sen!2s!4v1692336800000!5m2!1sen!2s"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className="homepage__contacts-bgdots"></div>
            <div className="homepage__contacts-icon1 parallax"></div>
            <div className="homepage__contacts-icon2 parallax"></div>
            <div className="homepage__contacts-icon3 parallax"></div>
            <div className="homepage__contacts-icon4 parallax"></div>
            </section>
            <Request isOpen={isOpen} onClose={() => setIsOpen(false)}/>

        </main>
    );
};

export default HomePage;