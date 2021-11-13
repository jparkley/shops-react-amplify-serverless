

const Product = ({product}) => {
    console.log('prod', product);
    return (
        <div className="product-list">
            <div className="product-card-header">
                <h3>{product.name}</h3>
            </div>
            <div className="product-card-body">
                <img src={product.image.key} />
                <div className="product-card-description">
                    {product.description}
                </div>
            </div>
        
        </div>
    )
}

export default Product
