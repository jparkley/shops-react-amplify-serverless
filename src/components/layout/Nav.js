import { Link } from 'react-router-dom'

const Nav = ({user, handleSignOut}) => {
    return (
        <div className="nav">
            <div className="nav-brand">
                <img src="/bag.png" alt="logo" />
                <h2>Shops</h2>
            </div>
            <div className="nav-container">          
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shops/3" className="nav-link">Shop</Link>
                    </li>
                </ul>
                <a href="#" className="toggle-menu">
                    <span className="menu-bar"></span>
                    <span className="menu-bar"></span>
                    <span className="menu-bar"></span>
                </a>
                <div className="nav-user">
                    Hello, {user.attributes.email}
                    <button type="button" className="btn" onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default Nav
