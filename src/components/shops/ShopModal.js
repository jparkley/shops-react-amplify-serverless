import { useState, useContext } from 'react'
import Modal from 'react-modal'

import { API, graphqlOperation } from 'aws-amplify'
import { createShop } from '../../graphql/mutations'

import { userContext } from '../../App'

// src\components\shops\ShopModal.js
//   Line 9:15:  React Hook "useContext" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks

const ShopModal = ({isOpen, toggleModal}) => {
    
    const [ name, setName ] = useState('')
    const user = useContext(userContext)    

    const addShop = async () => {
        try {
            if (name ==='') {
                console.log('emptu');
                return
            }
            const res = await API.graphql(graphqlOperation(createShop, { input: {name: name, owner: user}}))
            // console.log('created? ', res);
            setName('')
            toggleModal()
        } catch(error) {
            console.log('Error in creating shop: ', error);
        }
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
                                    onChange={(e) => setName(e.target.value)} required />
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
