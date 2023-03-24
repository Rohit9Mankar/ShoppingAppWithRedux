import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { ToggleActions } from '../store/ToggleCartSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(ToggleActions.toogleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
