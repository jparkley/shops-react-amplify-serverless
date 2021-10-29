import { useState } from 'react'
import Modal from 'react-modal'

import { API, graphqlOperation } from 'aws-amplify'
import { createShop } from '../../graphql/mutations'

const ShopModal = ({isOpen, toggleModal}) => {
    
    const [ name, setName ] = useState('')

    const addShop = async () => {
        const res = await API.graphql(graphqlOperation(createShop, { input: {name}}))
        console.log('created? ', res);       
    }

    return (
        <div>            
            <Modal isOpen={isOpen} onRequestClose={toggleModal} ariaHideApp={false}
                contentLabel="Create Your Shop" className="shop-modal" overlayClassName="shop-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Create Your Shop</h2>
                    </div>
                    <form action="">
                        <div className="modal-body">                                                
                            <label htmlFor="name">Shop Name: </label>
                            <input type="text" name="name" value={name} placeholder="Enter shop name"
                                    onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button"  onClick={toggleModal}>Cancel</button>
                            <button type="button" 
                                onClick={addShop}
                                disabled={!name} >Add</button>
                        </div>
                    </form>
                </div>               
            </Modal>
        </div>
    )
}

export default ShopModal
