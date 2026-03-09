import BannerHome from "./banner/banner-home"
import MostSold from "./most-sold/most-sold"
import Newsletter from "./newsletter/newsletter"
import ProductsOffers from "./offers/products-offers"
import ProductCategories from "./product-categories/product-categories"


function HomePage() {
    return (
        <div className="home">
            <BannerHome />
            <ProductCategories />
            <ProductsOffers />
            <MostSold />
            <Newsletter />
        </div>
    )
}

export default HomePage