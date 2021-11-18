import Modal from 'react-modal'
import ProductForm from '../shops/ProductForm'

const ModalForProduct = ({isOpen, toggleModal, data}) => {

    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={toggleModal} ariaHideApp={false}
            contentLabel="Update Product" className="shop-modal"  overlayClassName="shop-overlay">
            <p>Update Product</p>
            <ProductForm isUpdate={true} product={data} />
            {/* <ProductForm owner={user} shopId={shopId} /> */}
            </Modal>
        </div>
    )
}

export default ModalForProduct
