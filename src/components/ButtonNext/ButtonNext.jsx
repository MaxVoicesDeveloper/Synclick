import './buttonNext.css'

export default function ButtonNext({ children, variant="primary", modal = false}){
    return <button className={`button-interesting button--${variant}`} data-bs-toggle={modal ? "modal" : null} data-bs-target={modal ? "#modal" : null}>{children}</button>
}