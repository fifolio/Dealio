import { Link } from "react-router-dom";
import { navlist } from "../../assets/data/data";
import logo from "../assets/images/logo.png";
import { BiSearch } from 'react-icons/bi'
import { RiUser3Line } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'



export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <div className="toggle">
                            <button>menu</button>
                        </div>
                        <div className=" left">
                            <img src={logo} alt="" />
                        </div>
                        <div className="center">
                            <ul className="menu">
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
                    </div>
                </div >
            </header >
        </>
    )
}
