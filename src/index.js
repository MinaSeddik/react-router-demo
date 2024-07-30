import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Dashboard from "./component/dashboard";
import BoostStrap from "./component/bootstrapss";
import Orders from "./component/orders";
import OrderConfirmation from "./component/OrderConfirmation";
import Products from "./component/products";
import FeatureProduct from "./component/FeatureProduct";
import NewProducts from "./component/NewProducts";
import CustomerProduct from "./component/CustomerProduct";
import Users from "./component/users";
import Profile from "./component/profile";
import UserDetails from "./component/UserDetails";
import UserAdminDetails from "./component/UserAdminDetails";
import XUsers from "./component/XUsers";
import XUserDetails from "./component/XUserDetails";
import NoMatch from "./component/NoMatch";
import RootLayout from "./component/RootLayout";
import CareersLayout from "./component/CareersLayout";
import Careers, {careersLoader} from "./component/Careers";
import CareerError from "./component/CareerError";
import Contact, {contactAction} from "./component/Contact";

const LazyAdminModule = React.lazy(() =>
    import("./component/Admin"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/about" element={<About/>}> </Route>
            <Route path="/dashboard" element={<Dashboard/>}> </Route>
            <Route path="/bootstrap" element={<BoostStrap/>}> </Route>
            <Route path="/orders" element={<Orders/>}> </Route>
            <Route path="/contact" element={<Contact/>} action={contactAction}> </Route>
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

            <Route path="/careers" element={<CareersLayout/>}>
                <Route index
                       element={<Careers/>}
                       loader={careersLoader}
                       errorElement={<CareerError/>}
                />
            </Route>

            <Route path="/admin" element={
                <React.Suspense fallback='Loading ...'>
                    <LazyAdminModule/>
                </React.Suspense>
            }/>

            <Route path="*" element={<NoMatch/>}> </Route>
        </Route>
    )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    //     <BrowserRouter>
    //         <App/>
    //     </BrowserRouter>
    // </React.StrictMode>

    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
