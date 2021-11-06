import ShopList from '../components/shops/ShopList'
import AddShop from '../components/shops/AddShop'

const Home = () => {
    return (
        <>
            <AddShop />
            <div className="container-content">
                <ShopList />
            </div>  
        </>
    )
}

export default Home
