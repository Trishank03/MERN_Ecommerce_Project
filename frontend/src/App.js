import './App.css';

import Header from './component/layout/Header/Header.js';
import WebFont from "webfontloader";
import { useEffect,useState } from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from './component/Product/Products.js'
import Search from './component/Product/Search.js';
import LoginSignUp from './component/User/LoginSignUp.js';
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
import NotFound from "./component/layout/Not Found/NotFound.js";

function App(){
  const { isAuthenticated, user } = useSelector((state) => state.user);
  
  
 

  


        useEffect(() => {
        WebFont.load({
          google: {
            families: ["Roboto", "Droid Sans", "Chilanka"],
          },
        });
        store.dispatch(loadUser());

     
    },[]);

   


    return(
        <Router>
            <Header/>
            {isAuthenticated && <UserOptions user={user} />}

        
            <Routes>
             
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/product/:id" element={<ProductDetails/>}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route path="/products/:keyword" element={<Products/>} />
            <Route exact path="/search" element={<Search/>}/>

            <Route exact path="/contact" element={<Contact/>} />

        <Route exact path="/about" element={<About/>} />
          
          
           <Route path='/account' element={<ProtectedRoute ><Profile /></ProtectedRoute> } /> 

           <Route path='/me/update' element={<ProtectedRoute ><UpdateProfile /></ProtectedRoute> } />

           <Route path='/password/update' element={<ProtectedRoute ><UpdatePassword /></ProtectedRoute> } />

          <Route path='/password/forgot' element={<ForgotPassword /> } />  

          <Route path="/password/reset/:token" element={<ResetPassword/>} />

          <Route exact path="/cart" element={<Cart/>} />

          <Route path='/login/shipping' element={<ProtectedRoute ><Shipping /></ProtectedRoute> } />

          <Route path='/order/confirm' element={<ProtectedRoute ><ConfirmOrder /></ProtectedRoute> } />

          <Route path='/process/payment' element={<ProtectedRoute ><Payment /></ProtectedRoute> } />

          
          <Route path='/success' element={<ProtectedRoute ><OrderSuccess /></ProtectedRoute> } />


          <Route path='/orders' element={<ProtectedRoute ><MyOrders /></ProtectedRoute> } />

          <Route path='/order/:id' element={<ProtectedRoute ><OrderDetails/></ProtectedRoute> } />

          <Route isAdmin={true} path='/admin/dashboard' element={<ProtectedRoute ><Dashboard /></ProtectedRoute> } />

          <Route isAdmin={true} path='/admin/products' element={<ProtectedRoute ><ProductList /></ProtectedRoute> } />  

          <Route isAdmin={true} path='/admin/product' element={<ProtectedRoute ><NewProduct /></ProtectedRoute> } />

          <Route isAdmin={true} path='/admin/product/:id' element={<ProtectedRoute ><UpdateProduct /></ProtectedRoute> } />  

          <Route isAdmin={true} path='/admin/orders' element={<ProtectedRoute ><OrderList /></ProtectedRoute> } />

          <Route isAdmin={true} path='/admin/order/:id' element={<ProtectedRoute ><ProcessOrder/></ProtectedRoute> } />

          <Route isAdmin={true} path='/admin/users' element={<ProtectedRoute ><UsersList /></ProtectedRoute> } />

          <Route isAdmin={true} path='/admin/user/:id' element={<ProtectedRoute ><UpdateUser /></ProtectedRoute> } />

          <Route isAdmin={true} path='/admin/reviews' element={<ProtectedRoute ><ProductReviews /></ProtectedRoute> } />

          <Route exact path="/login" element={<LoginSignUp/>} />

          <Route path="*" element={<NotFound/>}/> 
       

            </Routes>
           
            <Footer/>
        </Router>
      
    )
}

export default App;