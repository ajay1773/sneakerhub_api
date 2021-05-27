import React from "react";
import "./App.css";
import "./Components/Fonts";
import Navbar from "./Components/Home";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./Components/Product";
import store from "./redux/store";
import Cart from "./Components/Cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserSignIn from "./Components/UserSignIn";
import UserProfile from "./Components/UserProfile";
import UserLogin from "./Components/UserLogin";
import ProductADD from "./Components/ProductForm";
import Search from "./Components/Search";
import Brand from "./Components/Brand";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import AdminLogin from "./Components/AdminLogin";
import AdminPanel from "./Components/AdminPanel";
import ManageProducts from "./Components/ManageProducts";
import ManageUsers from "./Components/ManageUsers";
toast.configure();
function App() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact component={Navbar} />
              <Route path="/adminlogin" exact component={AdminLogin} />
              <Route path="/product" exact component={Product} />
              <Route path="/addproduct" exact component={ProductADD} />
              <Route
                path="/admin/manageProducts"
                exact
                component={ManageProducts}
              />
              <Route path="/admin/manageUsers" exact component={ManageUsers} />
              <Route path="/cart" component={Cart} />
              <Route path="/search" component={Search} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/brand" component={Brand} />
              <Route path="/user/signin" exact component={UserSignIn} />
              <Route path="/user/profile" exact component={UserProfile} />
              <Route path="/user/login" exact component={UserLogin} />
            </Switch>
          </Router>
        </Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
