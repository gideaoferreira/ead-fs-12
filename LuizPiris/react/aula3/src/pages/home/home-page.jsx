import BannerHome from "./banner/banner-home";
import ProductOffers from "./offers/product-offers";
import ProductCategories from "./product-categories/product-categories";
import MostSold from "./most-sold/most-sold";
import Newsletter from "./newsletter/newsletter";

function HomePage () {
    return (
        <>
            <div className="home">
                <BannerHome />
                <ProductCategories />
                <ProductOffers />
                <MostSold />
                <Newsletter />
            </div>
        </>
    )
}

export default HomePage;