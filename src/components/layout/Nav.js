import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'

const Nav = ({user, handleSignOut}) => {

    const [isOpen, setIsOpen] = useState(false)
    let show = isOpen ? 'show' : ''

    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className="nav">
            <div className="nav-brand">
                <img src="/bag.png" alt="logo" />
                <h2>Shops</h2>
            </div>
            <div className="nav-links">          
                <ul className={`nav-list ${show}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shops/" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-link nav-link" onClick={handleSignOut}>Sign Out</button>
                    </li>
                </ul>
                <a href="#" className="toggle-menu" onClick={handleToggle}>
                    {isOpen ? <FaTimes />: <FaBars />}
                </a>
                <div className="nav-user">
                    <p>{user.attributes.email}</p>
                    <button type="button" className="btn" onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default Nav
