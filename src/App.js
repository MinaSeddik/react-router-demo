import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import Orders from "./component/orders";
import BoostStrap from "./component/bootstrapss";
import Dashboard from "./component/dashboard";
import OrderConfirmation from "./component/OrderConfirmation";
import NoMatch from "./component/NoMatch";
import Products from "./component/products";
import NewProducts from "./component/NewProducts";
import FeatureProduct from "./component/FeatureProduct";
import CustomerProduct from "./component/CustomerProduct";
import Users from "./component/users";
import UserDetails from "./component/UserDetails";
import XUsers from "./component/XUsers";
import XUserDetails from "./component/XUserDetails";
import UserAdminDetails from "./component/UserAdminDetails";
import React from "react";
import Profile from "./component/profile";
import {AuthProvider} from "./component/auth";

const LazyAdminModule = React.lazy(() =>
    import("./component/Admin"));

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <NavBar/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <SideBar/>
                        </div>


                        <Routes>
                            <Route path="/" element={<Home/>}> </Route>
                            <Route path="/about" element={<About/>}> </Route>
                            <Route path="/dashboard" element={<Dashboard/>}> </Route>
                            <Route path="/bootstrap" element={<BoostStrap/>}> </Route>
                            <Route path="/orders" element={<Orders/>}> </Route>
                            <Route path="/order-confirmation" element={<OrderConfirmation/>}> </Route>
                            <Route path="/products" element={<Products/>}>
                                <Route index element={<FeatureProduct/>}/>
                                <Route path="new" element={<NewProducts/>}/>
                                <Route path="feature" element={<FeatureProduct/>}/>
                                <Route path="customer" element={<CustomerProduct/>}/>
                            </Route>
                            <Route path="/users" element={<Users/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/user/:userId" element={<UserDetails/>}/>
                            <Route path="/user/admin" element={<UserAdminDetails/>}/>
                            <Route path="/xusers" element={<XUsers/>}>
                                <Route path=":userId" element={<XUserDetails/>}/>
                            </Route>

                            <Route path="/admin" element={
                                <React.Suspense fallback='Loading ...'>
                                    <LazyAdminModule/>
                                </React.Suspense>
                            }/>

                            <Route path="*" element={<NoMatch/>}> </Route>
                        </Routes>

                    </div>
                </div>
                <Footer/>

            </div>
        </AuthProvider>
    );
}

export default App;
