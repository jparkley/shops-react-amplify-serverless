import { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import ModalForShop from './ModalForShop'
import ModalForProduct from './ModalForProduct'
import ModalForAlert from './ModalForAlert'

const ModalHandler = ({type, data}) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => setIsOpen(!isOpen)

    let modalComponent = null
    let linkComponent = null

    switch(type) {
        case 'product':
            linkComponent = <button className="btn" onClick={toggleModal}>Update</button>
            modalComponent = <ModalForProduct isOpen={isOpen} toggleModal={toggleModal} data={data || null} />
            break
        case 'shop':
            modalComponent = <ModalForShop isOpen={isOpen} toggleModal={toggleModal} />
            break
        case 'alert-delete':
            linkComponent = <button className="btn" onClick={toggleModal}>Delete</button>
            modalComponent = <ModalForAlert isOpen={isOpen} toggleModal={toggleModal} data={data || null} />
            break 
        default:
            /* todo: display toaster message instead */
            modalComponent = <ModalForShop isOpen={isOpen} toggleModal={toggleModal} />
            break
    }

    return (
        <>
            {linkComponent || (
                <div className="icon" onClick={toggleModal}><FaPencilAlt /></div>
            )}            
            {modalComponent}
        </>
        )
}

export default ModalHandler
