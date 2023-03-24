import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartArray = useSelector(state => state.cart.cartArray);
  const ItemsinCart = cartArray.map((item) => (
    <CartItem
      key={item.id}
       id={item.id} title= {item.title} quantity= {item.quantity} total= {0} price= {item.price}
    />
  ))

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>

        {ItemsinCart}
   
    </Card>
  );
};

export default Cart;
