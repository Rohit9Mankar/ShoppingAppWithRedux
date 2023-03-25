import classes from './Notification.module.css';
import { useSelector } from "react-redux";

const Notification=()=>{
    const notification=useSelector(state=> state.ui.requestMessage);
    let specialClasses = '';

    if (notification.type === 'Error') {
      specialClasses = classes.error;
    }
    if (notification.type === 'Success') {
      specialClasses = classes.success;
    }
  
    const cssClasses = `${classes.notification} ${specialClasses}`;
return(

        <section className={cssClasses}>
        <h2>{notification.type}</h2>
            <p>{notification.message}</p>
        </section>
     
)
}
export default Notification;