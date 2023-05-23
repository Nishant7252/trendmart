import axios from "axios";
import { useEffect, useState } from "react";
import img1 from './images/blank.jpg';
import img2 from './images/progress1.gif';
import { useNavigate } from "react-router";
function Register()
{
    let [countries,setCountries]=useState([]);
    let [states,setStates]=useState([]);
    let [msg,setMsg]=useState('');
    let[a,setA]=useState(0);
    let nav=useNavigate();
    function doRegister()
    {
        let email=document.getElementById("txtEmail");
        let pass1=document.getElementById("txtPass1");
        let pass2=document.getElementById("txtPass2");
        let fname=document.getElementById("txtFName");
        let lname=document.getElementById("txtLName");
        let address=document.getElementById("txtAddress");
        let mobile=document.getElementById("txtMobile");
        let country=document.getElementById("cmbCountry");
        let state=document.getElementById("cmbState");
        let city=document.getElementById("txtCity");
        let pincode=document.getElementById("txtPincode");
        if(email.value=="")
        {
            alert("Invalid Email!!!");
            email.focus();
            return;
        }
        if(pass1.value.length<8)
        {
            alert("Min Password length is 8");
            pass1.focus();
            return;
        }
        if(pass1.value!=pass2.value)
        {
            alert("Both Password must be same");
            pass2.focus();
            return;
        }
        //Write All Validations
        let obj={email:email.value,upass:pass1.value,fname:fname.value,lname:lname.value,mobile:mobile.value,country:country.value,state:state.value,address:address.value,city:city.value,pincode:pincode.value};
        let json=JSON.stringify(obj);
        axios.post("https://api.webroot.net.in/members.php",json).then(reply=>{
            if(reply.data.status=="OK")
            {
                alert("Registered Successfully");
                email.value="";
                pass1.value="";
                pass2.value="";
                fname.value="";
                lname.value="";
                address.value="";
                mobile.value="";
                city.value="";
                pincode.value="";
                nav("/login");
            }
        });

    }    
    function loadCountries()
    {
        axios.get("https://api.webroot.net.in/countries.php").then(reply=>{
            setCountries(reply.data);
        });
    }
    function loadStates(event)
    {
        let c=event.target.value;
        axios.get("https://api.webroot.net.in/states.php?isoname="+c).then(reply=>{
            setStates(reply.data);
        });
    }
    function checkEmail(event)
    {
        let e=event.target.value;
        if(e!="")
        {
            setA(1);
            setMsg("");
            axios.get("https://api.webroot.net.in/checkmember.php?email="+e).then(reply=>{
                setA(0);
                if(reply.data.status!="No")
                {
                    setMsg("This Email Already Exists!!!");
                }
            });
        }
    }
    useEffect(()=>{
        loadCountries();
    },[]);
    return(
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" id="txtEmail" onBlur={checkEmail} className="form-control"/>
                    <span style={{color:'red'}}>{msg}</span> <img src={a==0?img1:img2} style={{width:'30px'}} />
                </div>
                <div className="form-group">
                    <label>Re Type Password:</label>
                    <input type="password" id="txtPass1" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" id="txtPass2" className="form-control"/>
                </div>     
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" id="txtFName" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" id="txtLName" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Mobile:</label>
                    <input type="text" id="txtMobile" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <textarea  id="txtAddress" className="form-control"></textarea>
                </div> 
                <div className="form-group">
                    <label>Country:</label>
                    <select  id="cmbCountry" onChange={loadStates} className="form-control">
                        {countries.map(e=>
                            <option value={e.isoname}>{e.cname}</option>
                            )}                        
                    </select>
                </div>
                <div className="form-group">
                    <label>State:</label>
                    <select id="cmbState" className="form-control">
                        {states.map(e=>
                            <option>{e.sname}</option>
                            )}
                    </select>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input id="txtCity" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Pin Code:</label>
                    <input id="txtPincode" type="text" className="form-control"/>
                </div>                            
                <br/>
                <input type="button" onClick={doRegister} value="Register" className="btn btn-primary" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
        </div>
    );
}
export default Register;