import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

const EcommerceBase = () => {
  return (
    <Provider store={store}>
      <header>shop name</header>
      <Outlet />
    </Provider>
  );
};

export default EcommerceBase;
