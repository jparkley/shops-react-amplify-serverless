import { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listShops } from '../../graphql/queries'

const ShopList = () => {

    const [shops, setShops] = useState([])
    useEffect(() => {
        const getShops = async () => {
            const res = await API.graphql(graphqlOperation(listShops))
            console.log('res', res.data.listShops.items)
            setShops(res.data.listShops.items)
        }
        getShops()
    }, [])
    return (
        <div>
            {shops.map(shop => (
                <div key={shop.id} className="shop-list">
                    <p>{shop.name}</p>
                    <div>
                        {shop.tags && shop.tags.map((category, index) => (
                            <span key={index}> {category} </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShopList
