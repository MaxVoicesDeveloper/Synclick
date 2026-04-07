import './Description.css'

export default function Description({children}){
    return(
        <>  
            <p className="description">
              {children}
           </p>
        </>
    )
}