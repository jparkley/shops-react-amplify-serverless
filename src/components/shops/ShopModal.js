import { useState } from 'react'
import Modal from 'react-modal'

const ShopModal = ({isOpen, toggleModal}) => {
    
    const [ name, setName ] = useState('')

    return (
        <div>
            This is shop modal
            <Modal isOpen={isOpen} onRequestClose={toggleModal} 
                contentLabel="Create Your Shop" className="shop-modal" overlayClassName="shop-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="modal-title">Create Your Shop</span>
                    </div>

                    <div className="modal-body">
                        Modal Body
                        <form action="">
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </form>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="" onClick={toggleModal}>Cancel</button>
                    <button type="button" disabled className=""> 
                        Add
                    </button>
                    </div>
                </div>               
            </Modal>
        </div>
    )
}

export default ShopModal
