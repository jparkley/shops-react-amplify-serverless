import { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listShops } from '../../graphql/queries'
import { FaCartArrowDown }  from 'react-icons/fa'

const ShopList = () => {

    const [shops, setShops] = useState([])
    useEffect(() => {
        const getShops = async () => {
            const res = await API.graphql(graphqlOperation(listShops))
            setShops(res.data.listShops.items)
        }
        getShops()
    }, [])

    return (
        <>
        <div className="container-content">
            <div className="shops-header"><FaCartArrowDown /><span>Shops</span></div>
            <div className="shops-list">
                {shops.map(shop => (
                    <div key={shop.id} className="shop-card">
                        <div className="shop-name">
                            <h3>{shop.name}</h3>
                            <span>{shop.owner}</span>
                        </div>
                        <div className="shop-categories">
                            {shop.tags && shop.tags.map((category, index) => (
                                <span key={index} className="badge">{category}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default ShopList
