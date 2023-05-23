import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import addimg from './images/addtocart.jpg';
import { useParams } from "react-router";
import { setBasket, setTotal } from "./action";
import { connect } from "react-redux";
function Products({mydata,setTotal,setBasket})
{
    let [arr,setArr]=useState([]);
    let aa=useParams();
    function applyFilter(pr)
    {
        if(aa.cid==undefined)
            return true;
        else
        {
            return pr.cid==aa.cid;
        }
    }
    function loadProducts()
    {
       axios.get("https://api.webroot.net.in/products.php").then(reply=>{
            let a=reply.data.filter(applyFilter);
            setArr(a);
       }); 
    }
    function addItem(pid,price)
    {
        setTotal(price);
        setBasket(pid);
    }
    useEffect(()=>{
        loadProducts();                
    },[]);
    return(
        <div className="row">
            {arr.map(c=>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" style={{textAlign:'center'}}>
                    <img src={c.photo}/><br/>
                    {c.pname}<br/>
                    {c.details}<br/>
                    Rs {c.price}/-<br/>
                    <img src={addimg} onClick={()=>{addItem(c.pid,c.price);}} style={{width:'150px',cursor:'pointer'}} />
                </div>
                )}
        </div>
    );
}
let mapStateToProps=(state)=>({mydata:state});
let mapFunctions=(dispatch)=>({
    setTotal:(value)=>dispatch(setTotal(value)),
    setBasket:(value)=>dispatch(setBasket(value)),
});
export default connect(mapStateToProps,mapFunctions)(Products);