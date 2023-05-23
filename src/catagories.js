import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import moreimg from './images/moreproducts.jpg';
import { useNavigate } from "react-router";
function Categories()
{
    let [arr,setArr]=useState([]);
    let nav=useNavigate();
    function loadCategories()
    {
       axios.get("https://api.webroot.net.in/categories.php").then(reply=>{
            setArr(reply.data);
       }); 
    }
    function f1(cid)
    {
        nav("/products/"+cid);
    }
    useEffect(()=>{
        loadCategories();
    },[]);
    return(
        <div className="row">
            {arr.map(c=>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" style={{textAlign:"center"}}>
                    <img src={c.photo}/><br/>
                    {c.details}<hr/>
                    <img src={moreimg} onClick={()=>{f1(c.cid);}} style={{cursor:'pointer'}} />
                </div>
                )}
        </div>
    );
}
export default Categories;