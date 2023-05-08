import { useEffect, useState } from "react"
import { connect, useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { MdStarRate } from 'react-icons/md'

const RevNum = Math.floor(Math.random() * 100);

export default function Details() {
    const [data, setData] = useState([])
    const getData = useSelector((state) => state.cartReducer.carts)


    const { id } = useParams()

    const compare = () => {
        let compareData = getData.filter((item) => {
            return item.id == id
        })
        setData(compareData)
    }

    useEffect(() => {
        compare(id)
    }, [compare])

    return (
        <>
            <article>
                <section className='details'>
                    <h2 className='details_title'>Product Details Pages</h2>
                    {data.map((item) => (
                        <div className="details_content">
                            <div className="details_content_img">
                                <img src={item.cover} alt="" />
                            </div>
                            <div className="details_content_detail">
                                <h1>{item.title}</h1>
                                <div className="rating">
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <label>({RevNum} customer review)</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </article>
        </>
    )
}
