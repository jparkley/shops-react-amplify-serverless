import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { API, graphqlOperation } from 'aws-amplify'
import { listShops } from '../../graphql/queries'
import { onCreateShop } from '../../graphql/subscriptions'
import { FaCartArrowDown }  from 'react-icons/fa'

const ShopList = () => {

    const [shops, setShops] = useState([])
    
    useEffect(() => {
        const getShops = async () => {
            const res = await API.graphql(graphqlOperation(listShops))
            setShops(res.data.listShops.items)
        }
        const subscribeShops = async () => {
            await API.graphql(graphqlOperation(onCreateShop)).subscribe({
                next: ({ provider, value }) => {
                    setShops(prev => [...prev,value.data.onCreateShop])
                },
                error: error => {
                    console.log('err in sub', error);
                }
            })
        }
        getShops()
        subscribeShops()

        return () => console.log('cleanup in shoplist');
        // need to add cleanup
    }, [])

    return (
        <>
            <div className="shops-header"><FaCartArrowDown /><span>Shops</span></div>
            <div className="shops-list">
                {shops.map(shop => (
                    <div key={shop.id} className="shop-card">
                        <div className="shop-name">
                            <Link to={`/shops/${shop.id}`} className="link"><h3>{shop.name}</h3></Link>
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
        </>
    )
}

export default ShopList
