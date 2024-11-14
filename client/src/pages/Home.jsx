import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import HomeBanner from "../images/home-banner-2.png"
import Products from "../components/Products"
import Footer from "../components/Footer"
import FlashSale from "../components/FlashSale"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [bannerImg, setBannerImg] = useState();

  useEffect(()=>{
    fetchBanner();
  }, [])

  const fetchBanner = async() =>{
    await axios.get('http://localhost:6001/fetch-banner').then(
      (response)=>{
        setBannerImg(response.data);
      }
    )
  }

  return (
    <div className="HomePage">
      <div className="home-banner">
        {bannerImg ?
          <img src={bannerImg} alt="" />
        :
        ""}
      </div>

      <div className="home-categories-container">

        <div className="home-category-card" onClick={()=>navigate('/category/Fashion')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQjXpWVVQhkT_A2n03XMo2KDV4yPSLBcoNA&usqp=CAU" alt="" />
          <h5>Fashion</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Electronics')}>
          <img src="https://5.imimg.com/data5/ANDROID/Default/2023/1/SE/QC/NG/63182719/product-jpeg-500x500.jpg" alt="" />
          <h5>Electronics</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/mobiles')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUW7v1WFJL9Ylax9a4vazyKXwG-ktSinI4Rd7qi7MkhMr79UlIyyrNkbiK0Cz5u6WYw&usqp=CAU" alt="" />
          <h5>Mobiles</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Groceries')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbpV_yQ_zCtZt_1kNebjvFqXvdDnLuuJPsQ&usqp=CAU" alt="" />
          <h5>Groceries</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Sports-Equipment')}>
          <img src="https://i.pinimg.com/474x/dc/e9/a4/dce9a4d3d065e197d26bf1b9399722c8.jpg"/>
          <h5>Stationary</h5>
        </div>

      </div>
    
    
      <div class="layout-container">
  
  <aside class="filter-section">
    <h2>Filter</h2>
    <p>Category</p>
    <p>Price Range</p>
  
  </aside>

  
  <section class="products-container">
    <div class="product-card">
      <img 
        src="https://korekawaii.com/cdn/shop/files/S256e6ef8dca74db0802728cb4d5255b5a.jpg?v=1695062744&width=1445" 
        alt="Product 1" 
        class="product-image" 
      />
      <div class="product-details">
        <div class="product-name">Product 1</div>
        <div class="product-description">This product is useful for everyday tasks.</div>
        <div class="product-price">Rs.10</div>
      </div>
      <button class="add-to-cart-button">Add to Cart</button>
    </div>

  </section>
</div>
  <Footer />
    </div>
  )
}

export default Home