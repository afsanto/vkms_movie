import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logo_vkms_movie@0.5x.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">vkmsMovies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contato</Link>
                        <Link to="/">Termos de uso</Link>
                        <Link to="/">Sobre</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Ao Vivo</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Politicas de Privacidade</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Assista</Link>
                        <Link to="/">Lançamentos</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
