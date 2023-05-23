import logo from './logo.svg';
import './App.css';
import Header from './header';
import { Route, Routes } from 'react-router-dom';
import About from './about';
import Products from './products';
import Register from './register';
import Login from './login';
import Basket from './basket';
import Contact from './contact';
import Footer from './footer';
import Catagories from './catagories';
import Logout from './logout';
import Profile from './profile';

function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path='/' element={<Catagories/>}></Route>
        <Route path='/categories' element={<Catagories/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/products/:cid" element={<Products/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/basket" element={<Basket/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <div>
       
      </div>
      <Footer/>
    </div>
  );
}

export default App;
