import Modal from 'react-modal'
import {  API, graphqlOperation } from 'aws-amplify'
import { deleteProduct } from '../../graphql/mutations'

const ModalForAlert = ({isOpen, toggleModal, data}) => {

    const handleDelete = async () => {
        console.log('id:', data);
        const input = {
            id: data
        }
        try {
            const res = await API.graphql(graphqlOperation( deleteProduct, { input }))
            // console.log(res);
        } catch(error) {
            console.log('Error in Deleting Product: ', error);
        }
    }

    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={toggleModal} ariaHideApp={false}
            contentLabel="Update Product" className="shop-modal"  overlayClassName="shop-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Delete product</h2>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure to delete this product? </p>
                        <button className="btn">Cancel</button>
                        <button className="btn btn-alert" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ModalForAlert
