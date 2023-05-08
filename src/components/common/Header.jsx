import { Link } from "react-router-dom";
import { navlist } from "../../assets/data/data";
import { BiSearch } from 'react-icons/bi';
import { BsBagCheck } from 'react-icons/bs'
import { RiUser3Line } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineDelete, AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

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

    // const dispatch = useDispatch()
    // const remove = (id) => {
    //     dispatch(DELETE(id))
    // }


    return (
        <>
            <header className="header">
                <div className="container">
                    <nav>
                        <div className="toggle">
                            <button onClick={() => setMobile(!mobile)}>
                                {mobile ? <AiOutlineClose className="close heIcon" /> : <AiOutlineMenu className="open heIcon" />}
                            </button>
                        </div>
                        <div className="left">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="center">
                            <ul className={mobile ? "mobile-nav" : "menu"}>
                                {navlist.map((nav, index) => (
                                    <li key={index}>
                                        <Link to={nav.path}>
                                            {nav.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                    <div className="right">
                        <div className="right_search">
                            <input type="text" placeholder="Search Products ..." />
                            <BiSearch className="searchIcon heIcon" />
                        </div>
                        <div className="right_user">
                            <RiUser3Line className='userIcon heIcon' />
                            <AiOutlineHeart className='userIcon heIcon' />
                        </div>
                        <div className="right_card">
                            <button className="button" onClick={() => setCartList(!cartList)}>
                                <BsBagCheck className="shop heIcon" />
                                <b>
                                    MY CART {getData.length ? `( ${getData.length} )` : ''}
                                </b>
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
                                            <h4>Total : $30</h4>
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


const mapStateToProps = (state) => {
    return {
        amount: state.amount,
    }
}
connect(mapStateToProps)(Header)