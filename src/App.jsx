import './App.css'
import MainPage from './components/MainPage/MainPage.jsx'
import About from './components/About/About.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Modal from './components/modal/Modal.jsx';
import Projects from './components/Projects/Projects.jsx';
import Teams from './components/Teams/Teams.jsx';

export default function App() {
  return (
    <>
      <MainPage />
      <About />
      <Modal />
      <Projects />
      <Teams />
    </>
  )
}

 