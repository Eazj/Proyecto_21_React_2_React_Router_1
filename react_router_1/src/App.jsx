import './App.css';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <div className='div_app_jsx '>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </div>
    </>
  )
}

export default App
