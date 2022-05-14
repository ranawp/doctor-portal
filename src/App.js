
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
