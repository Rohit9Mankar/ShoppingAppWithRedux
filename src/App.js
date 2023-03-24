import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './components/store/UISlice';
import Notification from './components/UI/Notification';


function App() {
  const show = useSelector(state => state.ui.showCart);
  const cart = useSelector(state => state.cart);
  const showNoti=useSelector(state => state.ui.showMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.showRequestHandler());
    dispatch(uiActions.changeRequestMessage({ type: "Sending", message: "sending Cart Data.." }))

    fetch('https://expense-tracker-13e79-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    }).then((res) => {

      if (res.ok) {
        dispatch(uiActions.changeRequestMessage({ type: "Success", message: "Sent Cart Data Successfully.." }))
      }
      else {
        dispatch(uiActions.changeRequestMessage({ type: "Error", message: "Sending cart Data Failed" }))
      }
    })
  }, [cart])

  return (
    <Layout>
     {showNoti && <Notification />}
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
