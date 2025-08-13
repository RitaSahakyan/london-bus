import React from 'react'
import '../styles/Header.scss'
import logo from '../assets/Header/logo.svg'
import langArm from '../assets/Header/Arm.svg'
import langRus from '../assets/Header/Rus.svg'
import langEng from '../assets/Header/Us.svg'


const Header = () => {
    return (
        <header className='header'>
            <div className='header__title'>
                <img src={logo} alt="Logo" className='header__logo'/>
                <div className='header__text'>
                    <span className='header__title'>LONDON</span>
                    <span className='header__subtitle'>BUS</span>
                </div>
            </div>
            <nav className='header__nav'>
                <a href='#home'>Գլխավոր</a>
                <a href='#about'>Մեր մասին</a>
                <a href='#groups'>Խմբեր</a>
                <a href='#parents'>Ծնողները մեր մասին</a>
                <a href='#ourday'>Մեր առօրյան</a>
                <a href='#contacts'>Կոնտակտներ</a>
            </nav>
            <div className='header__lang'>
                <img src={langArm} alt='Armenian' />
                <img src={langRus} alt='Russian' />
                <img src={langEng} alt='English' />
            </div>
        </header>
    )
};

export default Header;