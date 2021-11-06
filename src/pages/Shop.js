import { useState, useEffect } from 'react'

import { API, graphqlOperation } from 'aws-amplify'
import { getShop } from '../graphql/queries'

const Shop = ({shopId}) => {
    const [state, setState] = useState({
        shop: null,
        isLoading: true,
        isOwner: true /* to check the current user is the owner of the shop */
    })

    useEffect(() => {
        if(!shopId) return

        const query = { id: shopId}
        const getShopInfo = async () => {
            const res = await API.graphql(graphqlOperation(getShop, query))
            setState({...state, shop: res.data.getShop, isLoading: false})
        }

        getShopInfo()
    }, [])

    return state.isLoading ? (
        <div>isLoading</div>
    ) : (
        <div className="shop-info">
            <div className="shop-header">
                <h3>{state.shop.name}</h3>
                <span>{state.shop.owner}</span>
            </div>
            <div className="shop-body">
                shop body here
            </div>
        </div>
    )
}

export default Shop
