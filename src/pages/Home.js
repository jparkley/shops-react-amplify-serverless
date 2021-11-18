import ModalHandler from '../components/shops/ModalHandler'
import ShopList from '../components/shops/ShopList'
// import AddShop from '../components/shops/AddShop'

const Home = () => {
    return (
        <>
            {/* <AddShop /> */}
            <div className="container-header">
                <h2>Add Your Shop</h2>
                <ModalHandler type="shop" /> {/* Modal to add new shop */}
            </div>
            <div className="container-content">
                <ShopList />
            </div>  
        </>
    )
}

export default Home
