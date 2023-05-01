import { useState } from 'react'
import { topProducts } from "../../../../assets/data/data"
import Heading from "../../Heading"
import ProductItem from "../product/ProductItem"

export default function TopProduct() {

    const [data, setData] = useState(topProducts)

    return (
        <>
            <section className="topproduct">
                <div className="container">
                    <div className="head">
                        <Heading title="Top Selling Products" desc="Meet our newbies! The latest templates uploaded to the marketplace. " />
                    </div>
                    <ProductItem data={data} />
                </div>
            </section>
        </>
    )
}