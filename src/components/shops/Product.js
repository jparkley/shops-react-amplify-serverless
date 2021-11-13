import { AmplifyS3Image } from '@aws-amplify/ui-react'

const Product = ({product}) => {

    return (
        <div className="product-card">
            <div className="product-card-header">
                <h3>{product.name}</h3>
            </div>
            <div className="product-card-body">
                <AmplifyS3Image imgKey={product.image.key} />
                <div className="product-card-description">
                    {product.description}
                </div>
            </div>
        </div>
    )
}

export default Product
