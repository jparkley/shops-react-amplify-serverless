import { useState } from 'react'

function ToggleMenu( ) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <a href="#" className="toggle-menu" onClick={() => setOpen(!open)}>
                <span className="menu-bar"></span>
                <span className="menu-bar"></span>
                <span className="menu-bar"></span>  
            </a>

        </>
    )
}

export default ToggleMenu
