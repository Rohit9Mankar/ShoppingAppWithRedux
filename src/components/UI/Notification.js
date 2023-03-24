import { Fragment } from "react";
import { useSelector } from "react-redux";

const Notification=()=>{
    const notification=useSelector(state=> state.ui.requestMessage);

return(
    <Fragment>
        <header style={{display:"flex",position:'absolute',top:'0'}}>
            <p>{notification.type}</p>
            <p>{notification.message}</p>
        </header>
    </Fragment>
)
}
export default Notification;