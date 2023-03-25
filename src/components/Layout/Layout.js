import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import MainHeader from './MainHeader';
import Notification from '../UI/Notification';

const Layout = (props) => {
  const showNoti=useSelector(state => state.ui.showMessage);
  return (
    <Fragment>
      {showNoti && <Notification />}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
