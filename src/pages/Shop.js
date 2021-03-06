import { useState, useEffect, useContext } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { getShop } from '../graphql/queries'
import { onCreateProduct } from '../graphql/subscriptions'

import { userContext } from '../App'
import '../styles/react-tabs.css'
import  ProductForm from '../components/shops/ProductForm'
import Product from '../components/shops/Product'

const Shop = ({shopId}) => {
    const [state, setState] = useState({
        shop: null,
        isLoading: true,
        isOwner: false /* To check the current user is the owner of the shop */
    })

    const user = useContext(userContext) /* currentAuthenticatedUser */
    const userEmail = user.attributes.email

    useEffect(() => {
        if(!shopId) return

        const checkOwner = (owner) => {
            // console.log('user from context', user.attributes.email);
            if (user) {
                setState(prev => ({...prev, isOwner: (owner === userEmail)}))
            }
        }

        const query = { id: shopId }
        const getShopInfo = async () => {
            const res = await API.graphql(graphqlOperation(getShop, query))
            setState({...state, shop: res.data.getShop, isLoading: false})
            checkOwner(res.data.getShop.owner)
        }

        const subscribeProducts = async() => {
            await API.graphql(graphqlOperation(onCreateProduct, {owner: user})).subscribe({
                next: ({provider, value}) => {
                    console.log('value', value);
                    setState({...state, shop: value.data.onCreateProduct})
                }, 
                error: error => {
                    console.log('Error in Subscribing to Shop(onCreateProduct)', error);
                }
            })
        }   
        getShopInfo()
        subscribeProducts()
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
                    {state.isOwner &&  (
                        <Tab>Add Product</Tab>
                    )}  
                        <Tab>Products({state.shop.products.items.length})</Tab>
                        <Tab>FAQ</Tab>
                    </TabList>

                    {state.isOwner && (
                    <TabPanel>
                        <ProductForm owner={user} shopId={shopId} />
                    </TabPanel>
                    )}
                    <TabPanel>
                        <div className="product-list">
                        {state.shop.products.items && (
                            state.shop.products.items.map(product => {
                                return (
                                    <Product key={product.id} product={product} />
                                )
                            })
                        )}
                        </div>
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
