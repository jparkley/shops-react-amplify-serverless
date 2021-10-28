import { Link } from 'react-router-dom'

const Nav = ({user, handleSignOut}) => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <img src="./bag.png" alt="logo" />
                <h2>Shops</h2>
            </div>
            <div className="collapse navbar-collapse" id="navbarRes">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">                        
                        <Link to="/profile" className="nav-link">Profile</Link>
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
