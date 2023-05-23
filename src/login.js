import axios from "axios";
import { connect } from "react-redux";
import { setLogin, setMember } from "./action";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
function Login({mydata,setLogin,setMember})
{
    let nav=useNavigate();
    let [ck,setCk]=useCookies("eshop");
    function checkLogin()
    {
        let s1=document.getElementById("txtLogin").value;
        let s2=document.getElementById("txtPassword").value;
        axios.get("https://api.webroot.net.in/members.php?email="+s1+"&upass="+s2).then(reply=>
        {
            if(reply.data.status!=undefined)
            {
                alert("Invalid Login/Password!!!");
            }
            else
            {
                if(document.getElementById("c1").checked)
                {
                    let d=new Date();
                    d.setDate(d.getDate()+7);
                    setCk("ULOGIN",s1,{expires:d});
                }
                setMember(reply.data);
                setLogin("Y");
                document.getElementById("txtLogin").value="";
                document.getElementById("txtPassword").value="";
                nav("/products");
            }
        }
        );
    }
    useEffect(()=>{
        if(ck.ULOGIN!=undefined)
        {
            document.getElementById("txtLogin").value=ck.ULOGIN;
        }
    },[]);
    return(
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" id="txtLogin" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" id="txtPassword" className="form-control"/>
                </div>
                <div className="form-group">
                    <input id="c1" type="checkbox"/> Remember Me
                </div>
                <br/>
                <input type="button" onClick={checkLogin} value="Login" className="btn btn-primary" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
        </div>
    );
}
let mapStateToProps=(state)=>({mydata:state});
let mapFunctions=(dispatch)=>({
    setLogin:(value)=>dispatch(setLogin(value)),
    setMember:(value)=>dispatch(setMember(value)),
});
export default connect(mapStateToProps,mapFunctions)(Login);