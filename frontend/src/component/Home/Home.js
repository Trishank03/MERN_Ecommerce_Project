import React , {Fragment, useEffect} from 'react';
import {CgMouse} from 'react-icons/cg';
import "./Home.css";

import MetaData from '../layout/MetaData.js';
import { clearErrors,getProduct } from '../../actions/productAction.js';
import {useDispatch,useSelector} from "react-redux";
import Loader from '../layout/Loader/Loader.js';
import {useAlert} from "react-alert";
import ProductCard from './ProductCard.js';




// const product = {
//     name:"Blue Tshirt",
//     // images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
//     images:[{url:"https://muselot.in/cdn/shop/products/Navy-blue-plain-t-shirts-for-women-online-in-100_-cotton_-round-neck-and-half-sleeves---MUSELOT.jpg?v=1658090205"}],
//     price:"3000",
//     _id:"Trishank",

// }


const Home = ()=>{
    const alert = useAlert();
    const dispatch = useDispatch();
    const {loading,error,products,productsCount} = useSelector(state => state.products)
    useEffect(()=>{
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
          }
    dispatch(getProduct());
    },[dispatch,error,alert]);

    return(
       <Fragment>
        {
            loading ? ( <Loader/> ) : ( <Fragment>

                <MetaData title="ShopEasy"/>
          
                      <div className='banner'>
                          <p>Welcome to ShopEasy</p>
                          <h1>Find Amazing products below</h1>
                         <a href="#container">
                      <button>
                          Scroll <CgMouse/>
                      </button>
                         </a>
                      </div>
                      <h2 className="homeHeading">Featured Products</h2>
          
                  <div className='container' id='container'>
                     
                  {products && products.map((product) => <ProductCard  key={product._id}  product={product}/>)}
          
                  </div>
          
                  </Fragment>)
        }
       </Fragment>
    )
}

export default Home;