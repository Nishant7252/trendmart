import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function BasketItem(params)
{
    let [product,setProduct]=useState({});
    function loadProductDetails()
    {
        axios.get("https://api.webroot.net.in/products.php?pid="+params.pid).then(reply=>{
            setProduct(reply.data);
        });
    }
    function RemoveItem(){

    }
    useEffect(()=>{
        loadProductDetails();
    },[]);
    return(
        <tr>
            <td>{product.pname}</td>
            <td>{product.details}</td>
            <td>{product.price}</td>
            <td><input type="button" value="-" /><input type="text" id="txtQty" value="1" style={{width:'20px',borderStyle:'none'}} readonly/><input type="button" value="+" /></td>
            <td>{product.price}</td>
            <td><img style={{width:'30px'}} src={product.photo} /></td>
            <td><button onClick={RemoveItem}><i className="fas fa-trash-alt"></i></button></td>
        </tr>
    );
}