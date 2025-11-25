import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);
import {  useEffect  } from "react";
import './Header.css'

export default function Header() {
    
    useEffect(() => {
    const button = document.querySelector('.grid-button');
    const headerPanel = document.querySelector('.main_block_header');
    const menuItems = document.querySelectorAll('.burger_menu__item');
    const links = document.querySelectorAll('.burger_menu__link');

    if (!button || !headerPanel || menuItems.length === 0) return;

    // Правила псевдоэлементов
    const beforeRules = [];
    const afterRules = [];

    menuItems.forEach((item, i) => {
        beforeRules.push(
            CSSRulePlugin.getRule(`.burger_menu__item:nth-child(${i + 1})::before`)
        );
        afterRules.push(
            CSSRulePlugin.getRule(`.burger_menu__item:nth-child(${i + 1})::after`)
        );
    });

    // Начальные состояния
    gsap.set(menuItems, { x: "-100%", opacity: 0 });
    beforeRules.forEach(rule => gsap.set(rule, { cssRule: { left: "-100vw" } }));
    afterRules.forEach(rule => gsap.set(rule, { cssRule: { left: "-102vw" } }));

    const openMenu = () => {
        headerPanel.classList.add('opened');

        menuItems.forEach((item, i) => {
            const delay = gsap.utils.random(0, 0.6);
            const duration = gsap.utils.random(0.8, 1.3);
            const ease = gsap.utils.random(["power4.out", "expo.out", "back.out(1.7)"]);

            gsap.to(item, { x: "0%", opacity: 1, duration, delay, ease });
            gsap.to(beforeRules[i], { cssRule: { left: "0px" }, duration, delay, ease });
            gsap.to(afterRules[i], { cssRule: { left: "0px" }, duration, delay, ease });
        });
    };

    const closeMenu = () => {
        headerPanel.classList.remove('opened');

        menuItems.forEach((item, i) => {
            const delay = gsap.utils.random(0, 0.3);
            const duration = gsap.utils.random(0.3, 0.6);
            const ease = "power3.in";

            gsap.to(item, { x: "-100%", opacity: 0, duration, delay, ease });
            gsap.to(beforeRules[i], { cssRule: { left: "-100vw" }, duration, delay, ease });
            gsap.to(afterRules[i], { cssRule: { left: "-102vw" }, duration, delay, ease });
        });
    };

    // Клик по кнопке
    const toggleMenu = e => {
        e.stopPropagation();
        headerPanel.classList.contains('opened') ? closeMenu() : openMenu();
    };

    button.addEventListener('click', toggleMenu);

    // Кнопки внутри меню (закрывают)
    const onLinkClick = () => {
        if (headerPanel.classList.contains('opened')) closeMenu();
    };
    links.forEach(l => l.addEventListener('click', onLinkClick));

    // Клик вне меню
    const clickOutside = e => {
        if (!headerPanel.contains(e.target) && !button.contains(e.target)) {
            if (headerPanel.classList.contains('opened')) closeMenu();
        }
    };

    document.addEventListener('click', clickOutside);


    // Mobile burger
    const burgerButton = document.querySelector('.mobile-flex-button-burger');
    const mobileMenu = document.querySelector('.menu_content_mobile');

    if (burgerButton && mobileMenu) {
        burgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('opened');
        });
    }

    // Очистка эффектов, чтобы React не создавал дубли обработчиков
    return () => {
        button.removeEventListener('click', toggleMenu);
        links.forEach(l => l.removeEventListener('click', onLinkClick));
        document.removeEventListener('click', clickOutside);
    };
}, []);

    return (
        <>
            <div className="main_block_header">
                <div className="menu_content">
                    <div className="content-desktop">
                        <div className="burger_menu__item">
                            <a href="#main" className="burger_menu__link">Главная</a>
                        </div>
                        <div className="burger_menu__item">
                            <a href="#about" className="burger_menu__link">О нас</a>
                        </div>
                        <div className="burger_menu__item">
                            <a href="#projects" className="burger_menu__link">Наши проекты</a>
                        </div>
                        <div className="burger_menu__item">
                            <a href="#contacts" className="burger_menu__link">Контакты</a>
                        </div>
                        <div className="burger_menu__item">
                            <a href="#team" className="burger_menu__link">Наша команда</a>
                        </div>
                        <div className="burger_menu__item">
                            <a href="#order" className="burger_menu__link">Заказать проект</a>
                        </div>
                        <div className="burger_menu__item">
                            <a href="#cooperation" className="burger_menu__link">Сотрудничество</a>
                        </div>
                    </div>
                </div>

                <div className="main_panel">
                    <div className="logo">
                        <a href="#"><img src="../assets/images/logos/main-logo-light.svg" alt="Logo" /></a>
                    </div>
                    <div className="panel_buttons">
                        <div className="grid-button">
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                    <div className="socials">
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="../assets/images/icons/group.svg" alt="Gp" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="../assets/images/icons/google+.svg" alt="Gg" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="../assets/images/icons/youtube.svg" alt="Yt" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="../assets/images/icons/share.svg" alt="Sh" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="../assets/images/icons/facebook.svg" alt="Fb" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="../assets/images/icons/vk.svg" alt="Vk" />
                                </a>
                            </div>
                        </div>
                        <div className="after-items">
                            <div className="socials_item">
                                <a href="https://telegram/synclick" target="_blank" rel="noopener noreferrer">
                                    <img src="../assets/images/icons/telegram.svg" alt="Telegram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
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