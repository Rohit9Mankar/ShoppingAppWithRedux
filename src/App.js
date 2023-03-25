import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './components/store/UISlice';
import { CartActions } from './components/store/CartSlice';


function App() {
  const show = useSelector(state => state.ui.showCart);
  const cart = useSelector(state => state.cart);


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
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(uiActions.showRequestHandler());
    dispatch(uiActions.changeRequestMessage({ type: "Recieving", message: "Recieving Cart Data.." }));

    fetch('https://expense-tracker-13e79-default-rtdb.firebaseio.com/cart.json')
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            let loadedCart = [];
            for (let key in data.cartArray) {
              loadedCart.push(data.cartArray[key])
            }
            dispatch(CartActions.loadCart({ loaded: loadedCart, total: data.totalItems }))
            dispatch(uiActions.changeRequestMessage({ type: "Success", message: "Sent Cart Data Successfully.." }))
          })
        }
        else {
          dispatch(uiActions.changeRequestMessage({ type: "Error", message: "Sending cart Data Failed" }))
        }
      })

  }, [dispatch]);

  return (
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
