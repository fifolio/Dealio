import { Link } from "react-router-dom";
import { BsBagCheck, BsGithub } from 'react-icons/bs'
import { AiFillGithub, AiOutlineClose, AiOutlineDelete, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/images/logo.png";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { DELETE } from "../../controller/action";

export default function Header() {

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");

        header.classList.toggle("active", this.window.scrollY > 100)
    })

    const [mobile, setMobile] = useState(false)



    // Cart add in shop
    const getData = useSelector((state) => state.cartReducer.carts)

    const [cartList, setCartList] = useState(false);
    const handleClose = () => {
        setCartList(null)
    }

    const dispatch = useDispatch()
    const remove = (id) => {
        dispatch(DELETE(id))
    }


    // total price
    const [price, setPrice] = useState(0)
    const totals = () => {
        let price = 0;
        getData.map((item, index) => {
            price = parseInt(item.price) * item.qty + price
        })
        setPrice(price)
    }

    useEffect(() => {
        totals()
    }, [totals])


    return (
        <>
            <header className="header">
                <div className="container">
                    <nav>
                        <div className="toggle" style={{ margin: '7px 5px 0 0' }}>
                            <button onClick={() => setMobile(!mobile)}>
                                {mobile ? <AiOutlineClose className="close heIcon" /> : <AiOutlineMenu className="open heIcon" />}
                            </button>
                        </div>
                        <div className="left" style={{ marginTop: '-10px' }}>
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="center">
                            <ul className={mobile ? "mobile-nav" : "menu"}>
                                <li><a href="/" style={{ textTransform: 'capitalize' }}>Home</a></li>
                                <li>
                                    <a href="https://github.com/fifolio/Dealio" target="_blank">
                                        {/* <BsGithub style={{ margin: '5px 5px 0 0', fontSize: '25px' }} /> */}
                                        <span style={{ textTransform: 'capitalize', lineHeight: '10px' }}>
                                            github repository
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="right">

                        <div className="right_user"></div>
                        <div className="right_card">
                            <button className="button" onClick={() => setCartList(!cartList)}>
                                <BsBagCheck className="shop heIcon" />
                                <strong>
                                    MY CART {getData.length ? `( ${getData.length} )` : ''}
                                </strong>
                            </button>
                            <div className={cartList ? 'showCart' : 'hideCart'}>
                                {getData.length ? (
                                    <section className="details">
                                        <div className="details_title">
                                            <h3>Photo</h3>
                                            <p>Product Name</p>
                                        </div>
                                        {getData.map((item) => (
                                            <div className="details_content">
                                                <div className="details_content_img">
                                                    <Link to={`/cart/${item.id}`} onClick={handleClose}>
                                                        <img src={item.cover} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="details_content_detail">
                                                    <div className="details_content_detail_price">
                                                        <p>{item.title.slice(0, 20)} ...</p>
                                                        <p>Price: ${item.price}</p>
                                                        <p>Quantity: ${item.qty}</p>
                                                    </div>
                                                </div>
                                                <div className="details_content_detail_icon">
                                                    <i onClick={() => remove(item.id)}>
                                                        <AiOutlineDelete />
                                                    </i>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="details_total">
                                            <h4>Total : ${price}</h4>
                                        </div>
                                    </section>
                                ) : (
                                    <div className="empty">
                                        <p>
                                            Your Cart is Empty
                                        </p>
                                        <img src="https://cdn-icons-png.flaticon.com/512/5400/5400905.png" alt="empty cart" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div >
            </header >
        </>
    )
}


connect(Header)