import { connect } from "react-redux";

function Profile({mydata})
{
    return(
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" id="txtEmail" value={mydata.member.email} className="form-control" readOnly/>                    
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" id="txtPass2" value={mydata.member.upass} className="form-control" readOnly/>
                </div>     
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" id="txtFName"  value={mydata.member.fname} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" id="txtLName" value={mydata.member.lname} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>Mobile:</label>
                    <input type="text" id="txtMobile"  value={mydata.member.mobile} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <textarea  id="txtAddress" className="form-control" readOnly>{mydata.member.address}</textarea>
                </div> 
                <div className="form-group">
                    <label>Country:</label>
                    <input type="text" id="txtCountry" value={mydata.member.country} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>State:</label>
                    <input type="text" id="txtState" value={mydata.member.state} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input id="txtCity" type="text" value={mydata.member.city} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>Pin Code:</label>
                    <input id="txtPincode" type="text" value={mydata.member.pincode} className="form-control" readOnly/>
                </div>                                                            
            </div>
            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
        </div>
    );
}
let mapStateToProps=(state)=>({mydata:state});
export default connect(mapStateToProps)(Profile);