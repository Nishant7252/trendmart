import { connect } from "react-redux";
import {setLogin,setMember} from "./action";
import { useNavigate } from "react-router";
function Logout({mydata,setLogin,setMember})
{
    let nav=useNavigate();
    function doLogout()
    {
        setLogin("N");
        setMember(null);
        nav("/login");
    }
    return(
        <div style={{textAlign:'center'}}>
            <h3>Thanks for Shop with us.</h3>
            <h3>We will be happy to see you again.</h3>
            <input type="button" value="Logout" onClick={doLogout} className="btn btn-warning"/>
        </div>
    );
}
let mapStateToProps=(state)=>({mydata:state});
let mapFunctions=(dispatch)=>({
    setLogin:(value)=>dispatch(setLogin(value)),
    setMember:(value)=>dispatch(setMember(value)),
});
export default connect(mapStateToProps,mapFunctions)(Logout);