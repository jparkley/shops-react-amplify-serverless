import { useState } from 'react'

const AddProduct = () => {
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('e in submit', e);
    }

    return (
        <div className="block">
            <form>
                <div className="form-element-grid">
                    <label htmlFor="product">Product Name: </label>
                    <input type="text" name="product" onChange={e => setProduct(e.target.value)} />
                </div>
                <div className="form-element-grid">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="form-element-grid">
                    <label htmlFor="price">Description: </label>
                    <input type="number" name="description" onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="form-element-grid">
                    <button type="submit" onClick={handleSubmit}>Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
