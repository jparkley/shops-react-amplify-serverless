import { useContext } from 'react'
import { AmplifyS3Image } from '@aws-amplify/ui-react'
import { userContext } from '../../App'

import ButtonBuyNow from '../layout/ButtonBuyNow'

const Product = ({product}) => {
    const user = useContext(userContext)
    let isOwner = user && (user.username == product.owner)

    return (
        <div className="product-card">
            <div className="product-card-header">
                <h3>{product.name}</h3>
            </div>
            <div className="product-card-body">
                <AmplifyS3Image imgKey={product.image.key} />
                <div className="product-card-description">
                    {product.description}
                    <h4>${product.price}</h4>
                    <h4>{product.shipped}</h4>
                    {!isOwner && (
                        <ButtonBuyNow />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product
