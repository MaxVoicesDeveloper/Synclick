import './ButtonMenu.css'
export default function ButtonMenu({onToggle}){
    return(
        <>
            <div className="panel_buttons" onClick={onToggle}> 
                <div className="grid-button">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </>
    )
}