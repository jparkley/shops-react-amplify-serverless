import { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { AmplifyS3ImagePicker } from '@aws-amplify/ui-react'
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
                    <input type="text" name="product" value={product} onChange={e => setProduct(e.target.value)} required />
                </div>
                <div className="form-element-grid">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} required />
                </div>
                <div className="form-element-grid">
                    <label htmlFor="price">Description: </label>
                    <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} required />
                </div>
                <div className="form-element-grid">
                    <label htmlFor="price">Will Ship: </label>
                    <div className="block-flex">
                        <input type="radio" checked={shipped === true} onChange={() => setShipped(true)} />Yes
                        <input type="radio" checked={shipped === false} onChange={() => setShipped(false)} />No (Downloadable Products)
                    </div>
                </div>
                <div className="block block-top-margin">
                    <AmplifyS3ImagePicker headerTitle="Please select product image" headerHint="JPG, GIF, PNG" 
                    theme={{
                        photoPickerButton: {
                            display: "none"
                        }
                    }} />
                </div>

                <div className="form-element-grid">
                    <button type="button" disabled={!product || !price || !description} onClick={handleSubmit}>Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
