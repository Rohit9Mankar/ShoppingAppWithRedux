import classes from './CartItem.module.css';
import { CartActions } from '../store/CartSlice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const addFromCartHandler = () => {
    dispatch(CartActions.addItem(props));
  };

  const removeFromCartHandler=()=>{
    dispatch(CartActions.removeFomCart(props));
  };

  const total = (props.price * props.quantity).toFixed(2);

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${props.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addFromCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
