import './Header.css'
import Menu from './Menu/Menu.jsx'
import MainPanelHeader from './MainPanelHeader/MainPanelHeader';
import { useState } from 'react';

export default function Header() {  
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className={`main_block_header ${isOpen ? "opened" : ""}`}>
                <Menu />
                <MainPanelHeader onToggle={() => setIsOpen(!isOpen)}/>
            </div>
            <div className="main_block_header_mobile">
                <div className="logo">
                    <a href="#">
                        <img src="../assets/images/logos/main-logo-light.svg" alt="Logo" />
                    </a>
                </div>
                <div className="panel_buttons">
                    <div className="mobile-flex-button-burger" aria-label="Open menu" role="button" tabindex="0">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
            <div className="menu_content_mobile">
                <div className="m_burger_menu__item">
                    <a href="#main" className="burger_menu__link">Главная</a>
                </div>
                <div className="m_burger_menu__item">
                    <a href="#about" className="burger_menu__link">О нас</a>
                </div>
                <div className="m_burger_menu__item">
                    <a href="#projects" className="burger_menu__link">Наши проекты</a>
                </div>
                <div className="m_burger_menu__item">
                    <a href="#team" className="burger_menu__link">Наша команда</a>
                </div>
                <div className="m_burger_menu__item">
                    <a href="#contacts" className="burger_menu__link">Контакты</a>
                </div>
                <div className="m_burger_menu__item">
                    <a href="#order" className="burger_menu__link">Заказать проект</a>
                </div>
                <div className="m_burger_menu__item">
                    <a href="#cooperation" className="burger_menu__link">Сотрудничество</a>
                </div>
            </div>
        </>
    )
}