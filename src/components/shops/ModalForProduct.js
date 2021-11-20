import Modal from 'react-modal'
import ProductForm from '../shops/ProductForm'

const ModalForProduct = ({isOpen, toggleModal, data}) => {

    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={toggleModal} ariaHideApp={false}
            contentLabel="Update Product" className="shop-modal"  overlayClassName="shop-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Uh2date Product</h2>
                    </div>
                    <div className="modal-body">
                        <ProductForm isUpdate={true} product={data} customStyle="product" />
                        {/* <ProductForm owner={user} shopId={shopId} /> */}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ModalForProduct
