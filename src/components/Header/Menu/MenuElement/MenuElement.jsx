import './MenuELement.css'

export default function MenuElement({children, href}){
    return (
        <>
            <div className="burger_menu__item">
                <a href={href} className="burger_menu__link">{ children }</a>
            </div>
        </>
    )
}