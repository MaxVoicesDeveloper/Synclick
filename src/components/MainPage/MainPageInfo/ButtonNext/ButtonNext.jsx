import './buttonNext.css'

export default function ButtonNext({ children, variant="primary" }){
    return <button className={`button-interesting button--${variant}`}>{children}</button>
}