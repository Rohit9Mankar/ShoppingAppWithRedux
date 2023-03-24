import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { uiActions } from '../store/UISlice';


const CartButton = (props) => {
  const numberOfItems=useSelector(state => state.cart.totalItems)
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toogleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
