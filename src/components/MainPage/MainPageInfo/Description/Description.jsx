import './Description.css'

export default function Description({children}){
    return(
        <>  
            <p class="description">
              {children}
           </p>
        </>
    )
}