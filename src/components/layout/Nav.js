import { Link } from 'react-router-dom'

const Nav = ({user, handleSignOut}) => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-brand">
                <img src="./bag.png" alt="logo" /><span>Shops</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarRes">
                <ul className="navbar-nav">
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
                <div className="navbar-user">
                    Hello, {user}
                    <button type="buton" onClick={handleSignOut}>Sign Out</button>                    
                </div>
            </div>
        </div>
    )
}

export default Nav
