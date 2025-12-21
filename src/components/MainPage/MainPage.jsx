import ButtonNext from './MainPageInfo/ButtonNext/ButtonNext.jsx'
import Description from './MainPageInfo/Description/Description.jsx'
import Title from './MainPageInfo/Title/Title.jsx'
import './MainPage.css'
export default function MainPage(){
    return (
    <div className="containers main-page" id="main">
        <div className="welcome-text">
           <Title>Сайты под ключ для бизнеса и цифровых проектов</Title>
           <Description>
            Проектируем и разрабатываем сайты с понятной логикой, аккуратным интерфейсом и фиксированным результатом.
            Без лишних процессов и размытых сроков.
            </Description>
           <div className="buttons d-flex gap-3">
            <ButtonNext variant="primary">Обсудить проект</ButtonNext>
            <ButtonNext variant='secondary'>Посмотреть работы</ButtonNext>
           </div>
        </div>
    </div>
    )
}