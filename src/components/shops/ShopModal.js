import { useState, useContext } from 'react'
import Modal from 'react-modal'
import toast from 'react-hot-toast'

import { API, graphqlOperation } from 'aws-amplify'
import { createShop } from '../../graphql/mutations'

import { userContext } from '../../App'

// src\components\shops\ShopModal.js
//   Line 9:15:  React Hook "useContext" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks

import Select  from 'react-select'
import data from '../../data/categories'

const categories = data.categories
const options = categories.map(category => {
    return ({'value': category.toLowerCase(), 'label': category})
})

const ShopModal = ({isOpen, toggleModal}) => {
    
    const [ state, setState ] = useState({
        shopName: '',
        selected: null
    })
    const user = useContext(userContext)

    const handleSelectChange = (e) => {
        setState(prev => ({
            ...prev,
            selected: e
        }))
    }
    const addShop = async () => {
        const tags = state.selected.map(tag => tag['value'])
        try {
            await API.graphql(graphqlOperation(createShop, { input: {
                name: state.shopName, 
                owner: user.attributes.email,
                tags: tags
            }}))
            setState({shopName:'', selected: []})
            toggleModal()
            toast.success(`Successfully Created Shop: ${state.shopName}`)
        } catch(error) {
            toast.error(`Error in creating shop`)
            console.log(`Error in creating shop`, error);
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
                            <div className="form-element">
                                <label htmlFor="shopName">Shop Name: </label>
                                <input type="text" name="shopName" value={state.shopName} placeholder="Enter shop name"
                                        onChange={(e) => setState({...state, shopName: e.target.value})}  />
                            </div>
                            <div className="form-element">
                                <label htmlFor="categories">Categories: </label>
                                <Select options={options}
                                        isMulti
                                        name="categories" 
                                        className="select"
                                        onChange={handleSelectChange}
                                        />
                            </div> 
                        </div>
                        <div className="modal-footer">
                            <button type="button"  onClick={toggleModal}>Cancel</button>
                            <button type="button" 
                                onClick={addShop}
                                disabled={!state.shopName} >Add</button>
                        </div>
                    </form>
                </div>               
            </Modal>
        </div>        
    )
}

export default ShopModal
