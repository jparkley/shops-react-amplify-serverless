import { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { API, graphqlOperation } from 'aws-amplify'
import { getShop } from '../graphql/queries'

import '../styles/react-tabs.css'

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
        <div className="container-content">
            <div className="shop-header">
                <h2>{state.shop.name}</h2><span>{state.shop.owner}</span>
            </div>
            <div className="shop-body">
                <Tabs>
                    <TabList>
                        <Tab>Products</Tab>
                        <Tab>Add Product</Tab>
                    </TabList>
                    <TabPanel>
                        this is for Products
                    </TabPanel>
                    <TabPanel>
                        this is for Add Product
                    </TabPanel>
                </Tabs>                
            </div>
        </div>
    )
}

export default Shop
