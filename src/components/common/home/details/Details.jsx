import { useEffect, useState } from "react"
import { connect, useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { MdStarRate } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { ADD } from '../../../../controller/action'

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
    }, [id])

    const dispatch = useDispatch();
    const increment = (AddQty) => {
        dispatch(ADD(AddQty))
    }

    return (
        <>
            <article>
                <section className='details'>
                    <h2 className='details_title'>Product Details</h2>
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

                                <h3>${item.price * item.qty}</h3>
                                <p>{item.author}</p>
                                <div className="qty">
                                    <div className="count">
                                        <button onClick={() => increment(item)}>
                                            <AiOutlinePlus />
                                        </button>
                                        <span>{item.qty}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </article>
        </>
    )
}
