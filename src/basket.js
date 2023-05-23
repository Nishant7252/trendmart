import { connect } from "react-redux";
import BasketItem from "./basketItem";

function Basket({mydata})
{
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Product/ Item</th>
                    <th>Details</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Amount</th>
                    <th>Image</th>
                    <th>Remove</th>

                </tr>
            </thead>
            <tbody>
                {mydata.basket.map(e=>
                    <BasketItem pid={e} />
                    )}
            </tbody>
        </table>
    );
}
let mapStateToProps=(state)=>({mydata:state});
export default connect(mapStateToProps)(Basket);