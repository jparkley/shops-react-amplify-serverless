import { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import ShopModal from './ShopModal'

const AddShop = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => setIsOpen(!isOpen)

    

    return (
        <>
        <div className="container-top" onClick={toggleModal}>
            <h2>Create Your Shop </h2>
            <div className="icon"><FaPencilAlt /></div>
        </div>
        <ShopModal isOpen={isOpen} toggleModal={toggleModal} />
        </>
        )
}

export default AddShop
