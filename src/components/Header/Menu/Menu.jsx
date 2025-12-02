import MenuElement from './MenuElement/MenuElement'
import './Menu.css'

export default function Menu(){
    return (
        <>
            <div className="menu_content">
                    <div className="content-desktop">
                        <MenuElement className="burger_menu__item" href="#main">Главная</MenuElement>
                        <MenuElement className="burger_menu__item" href="#about">О нас</MenuElement>
                        <MenuElement className="burger_menu__item" href="#projects">Наши проекты</MenuElement>
                        <MenuElement className="burger_menu__item" href="#contacts">Контакты</MenuElement>
                        <MenuElement className="burger_menu__item" href="#team">Наша команда</MenuElement>
                        <MenuElement className="burger_menu__item" href="#order">Заказать проект</MenuElement>
                        <MenuElement className="burger_menu__item" href="#cooperation">Сотрудничество</MenuElement>
                    </div>
                </div>
        </>
    )
}