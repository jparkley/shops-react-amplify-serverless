import { useState, useEffect, useContext } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { API, graphqlOperation } from 'aws-amplify'
import { getShop } from '../graphql/queries'

import { userContext } from '../App'
import '../styles/react-tabs.css'
import  AddProduct from '../components/shops/AddProduct'

const Shop = ({shopId}) => {
    const [state, setState] = useState({
        shop: null,
        isLoading: true,
        isOwner: false /* To check the current user is the owner of the shop */
    })

    const user = useContext(userContext)
    const userEmail = user.attributes.email

    useEffect(() => {
        if(!shopId) return

        const checkOwner = (owner) => {
            // console.log('owner: ',owner );
            // console.log('user from context', user.attributes.email);    
            if (user) {
                setState(prev => ({...prev, isOwner: (owner === userEmail)}))
            }
        }

        const query = { id: shopId}
        const getShopInfo = async () => {
            const res = await API.graphql(graphqlOperation(getShop, query))
            setState({...state, shop: res.data.getShop, isLoading: false})
            checkOwner(res.data.getShop.owner)
        }

        getShopInfo()
    }, [])

    // console.log('state: ', state);
    //console.log(state.shop.products.items.length);

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
                    {state.isOwner &&  (
                        <Tab>Add Product</Tab>
                    )}  
                        <Tab>Products({state.shop.products.items.length})</Tab>
                        <Tab>FAQ</Tab>
                    </TabList>

                    {state.isOwner && (
                    <TabPanel>
                        <AddProduct owner={userEmail} />
                    </TabPanel>
                    )}
                    <TabPanel>Products
                        {/* {state.shop.products && (
                            state.shop.products.map(product => {
                                return (
                                    <div className="product-header">name here</div>
                                )
                            })
                        )} */}

                    </TabPanel>
                    <TabPanel>
                        FAQ section
                    </TabPanel>
                </Tabs>                
            </div>
        </div>
    )
}

export default Shop
