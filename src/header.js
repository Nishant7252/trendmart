import React from 'react';
import { Link,Route,Routes } from 'react-router-dom';
import './header.css';
import About from './about';
import { connect } from 'react-redux';
function Header({mydata}) {
  function ff1()
    {
        return(
            <>
                <li><Link to ="/login">Login</Link></li>
                <li><Link to ="register">Register</Link></li>
            </>
        );
    }
    function ff2()
    {
        return(
            <>
                <li><Link to ="/profile">Profile</Link></li>
                <li><Link to ="logout">Logout</Link></li>
            </>
        );
    }
  return (
    <div>
       <nav class="navbar">
        <div class="logo">TrendMart</div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        <div class="menu">
                <li><Link to="/">Home</Link></li>
                {mydata.isLogin=="N"?ff1():ff2()}
                
                <li class="services">
                <Link to="/categories">Categories</Link>
                <ul class="dropdown">
                <li><Link to="/drop1">Laptops </Link></li>
                <li><Link to="/drop2">Mobiles</Link></li>
                <li><Link to="/drop3">T-shirt</Link></li>
                <li><Link to="/drop4">Saree</Link></li>
                <li><Link to="/drop5">Dropdown 4</Link></li>
                </ul>
                </li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/basket">Basket</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
         </div>
            </ul>
            <div style={{marginRight:'10px'}}>
            Total Items: {mydata.basket.length}<br/>
            Net Payable: Rs {mydata.total}.00/-
        </div>
    </nav>
    
</div>
  );
}

let mapStateToProps=(state)=>({mydata:state});

export default connect(mapStateToProps)(Header);