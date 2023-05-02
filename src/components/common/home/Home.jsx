import Banner from './banner/Banner'
import Blog from './blog/Blog'
import Card from './hero/Card'
import Hero from './hero/Hero'
import Price from './price/Price'
import Product from './product/Product'
import Testimonial from './testimonial/Testimonial'
import TopProduct from './topproduct/TopProduct'

export default function Home() {
    return (
        <>
            <Hero />
            <Card />
            <Product />
            <Banner />
            <TopProduct />
            <Price />
            <Testimonial />
            <Blog />
        </>
    )
}

