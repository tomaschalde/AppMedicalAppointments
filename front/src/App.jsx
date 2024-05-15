import {Route, Routes} from "react-router-dom"

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

import Home from './views/Home/Home'
import Login from './views/Login/Login';
import MyAppointments from './views/MyAppointments/MyAppointments';
import Register from './views/Register/Register';
import Contacto from './views/Contacto/Contacto';
import CreateAppointment from './views/CreateAppointment/CreateAppointment';



function App() {


  return (
    <>

      
      <Navbar />
      
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path ="/contact" element = {<Contacto />} />
        <Route path = "/appointments" element = {<MyAppointments />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/schedule" element = {<CreateAppointment />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
