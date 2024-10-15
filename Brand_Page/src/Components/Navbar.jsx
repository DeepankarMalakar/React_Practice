const Navbar = () => {
    return (
        <nav>
            <div className="logo-container">
                <img src="/brand_logo.png" alt="Logo" />
            </div>
            <div className="list-items">
                <ul>
                    <li>MENU</li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="btn-container">
                <button className="login-btn">Login</button>
            </div>
        </nav>
        
    )
}

export default Navbar