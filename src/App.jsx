import { useState } from 'react'
import './App.css'
import ButtonNext from './components/ButtonNext/ButtonNext.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="containers main-page" id="main">
       <div class="welcome-text">
           <h1 class="name">Добро пожаловать в Synclick</h1>
           <p class="description">
               Команда разработчиков. Опытные профессионалы, 
               которые помогут вам с вашим стартапом, придумают 
               идею и сделают все так, как вам нравится
           </p>
           <ButtonNext className="button-interesting">Вперёд</ButtonNext>
       </div>
      </div>
    </>
  )
}

 