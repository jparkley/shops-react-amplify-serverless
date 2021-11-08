import { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createProduct } from '../../graphql/mutations'

const AddProduct = ({owner}) => {
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [shipped, setShipped] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: product,
            owner: owner,
            description: description,
            price: price,
            shipped: shipped
        }
        // const res = await API.graphql(graphqlOperation(createProduct, { input: data}))
        console.log('e in submit', data);
    }

    return (
        <div className="block">
            <form>
                <div className="form-element-grid">
                    <label htmlFor="product">Product Name: </label>
                    <input type="text" name="product" onChange={e => setProduct(e.target.value)} required />
                </div>
                <div className="form-element-grid">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" onChange={e => setPrice(e.target.value)} required />
                </div>
                <div className="form-element-grid">
                    <label htmlFor="price">Description: </label>
                    <input type="text" name="description" onChange={e => setDescription(e.target.value)} required />
                </div>
                <div className="form-element-grid">
                    <label htmlFor="price">Will Ship: </label>
                    <div className="block-flex">
                        <input type="radio" checked={shipped === true} onChange={() => setShipped(true)} />Yes
                        <input type="radio" checked={shipped === false} onChange={() => setShipped(false)} />No (Downloadable Products)
                    </div>
                </div>

                <div className="form-element-grid">
                    <button type="submit" onClick={handleSubmit}>Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
