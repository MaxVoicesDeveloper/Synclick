import "./Project.css"
import ButtonNext from '../../ButtonNext/ButtonNext.jsx'

export default function Project() {
    return (
        <>
        <div className="card">
            <img src="https://i.pinimg.com/736x/6b/71/d7/6b71d76d500c5127955410a35fc303b8.jpg" class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <div className="btn-zone">
                    <ButtonNext variant='secondary'>Посмотреть работы</ButtonNext>
                </div>
            </div>
        </div>
         </>
    )
}