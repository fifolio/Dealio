import logo from "../assets/images/logo.png";

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <div className="toggle">
                            <button>menu</button>
                        </div>
                        <div className="left">
                            <img src={logo} alt="logo" />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
