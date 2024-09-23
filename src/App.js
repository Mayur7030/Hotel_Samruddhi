import "./App.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import {Toaster} from "react-hot-toast"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Reservation from "./Pages/Reservation"

const App =()=>{
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/RegistrationForm" element={<Reservation/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  </Router>
}

export default App;