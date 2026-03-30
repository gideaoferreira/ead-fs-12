
import ProductCategories from "./product-categories/products-cateories"
import MostSold from "./most-sold/most-sold"
import BannerHome from "./banner/banner-home"
import ProductOferts from "./oferts/product-oferts"
import Newsletter from "./newsletter/newsletter"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

 

function HomePage() {
    return (
        <div className="home">
            <BannerHome />
       
            <ProductCategories />
            <ProductOferts />
            <MostSold />
            <Newsletter />
         
        </div>
    )
} 
export default HomePage