import './Title.css'

export default function Title({children}){
    return(
        <>
            <span className="name">{children}</span>
        </>
    )
}