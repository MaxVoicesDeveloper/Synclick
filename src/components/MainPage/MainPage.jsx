import ButtonNext from './MainPageInfo/ButtonNext/ButtonNext.jsx'
import Description from './MainPageInfo/Description/Description.jsx'
import Title from './MainPageInfo/Title/Title.jsx'

export default function MainPage(){
    return (
        <>
    <div className="containers main-page" id="main">
        <div className="welcome-text">
           <Title />
           <Description />
           <ButtonNext className="button-interesting">Вперёд</ButtonNext>
        </div>
    </div>
        </>
    )
}