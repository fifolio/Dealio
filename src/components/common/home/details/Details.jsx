import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from "react-router-dom"
import { MdStarRate } from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ADD, REMOVE_INT, DELETE } from '../../../../controller/action'

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

    const decrement = (item) => {
        dispatch(REMOVE_INT(item))
    }

    const navigate = useNavigate();
    const deletes = (id) => {
        dispatch(DELETE(id))
        navigate("/")
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
                                        <button onClick={item.qty <= 1 ? () => deletes(item.id) : () => decrement(item)}>
                                            <AiOutlineMinus />
                                        </button>
                                    </div>
                                    <button className="button">Add to Cart</button>
                                </div>
                                <div className="desc">
                                    <h4>PRODUCT DESCRIPTION</h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <h4>PRODUCT DETAILS</h4>
                                    <ul>
                                        <li>
                                            <p> Material: Plastic, Wood</p>
                                        </li>
                                        <li>
                                            <p>Legs: Lacquered oak and black painted oak</p>
                                        </li>
                                        <li>
                                            <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                                        </li>
                                        <li>
                                            <p>Length: 48cm</p>
                                        </li>
                                        <li>
                                            <p>Depth: 52 cm</p>
                                        </li>
                                        <li>
                                            <p>Seat Height: 44 cm</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </article>
        </>
    )
}
