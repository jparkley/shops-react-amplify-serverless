import { Link } from 'react-router-dom'
import ToggleMenu from './ToggleMenu'

const Nav = ({user, handleSignOut}) => {
    return (
        <div className="nav">
            <div className="nav-brand">
                <img src="/bag.png" alt="logo" />
                <h2>Shops</h2>
            </div>
            <div className="nav-links">          
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shops/3" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-link nav-link" onClick={handleSignOut}>Sign Out</button>
                    </li>
                </ul>
                <ToggleMenu />
                <div className="nav-user">
                    <p>{user.attributes.email}</p>
                    <button type="button" className="btn" onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default Nav
