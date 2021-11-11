import { useState, useContext } from 'react'
import { API, graphqlOperation, Storage } from 'aws-amplify'
// import { AmplifyS3ImagePicker, AmplifyS3Image } from '@aws-amplify/ui-react'
import aws_exports from '../../aws-exports'
import { createProduct } from '../../graphql/mutations'
import { userContext } from '../../App'

const AddProduct = ({owner}) => {
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [shipped, setShipped] = useState(true)
    const [imageFile, setImageFile] = useState('')

    const user = useContext(userContext)

    const handleSubmit = async (e) => {

        e.preventDefault()
        const path = "public"
        const filename = `/${path}/${user.username}/${Date.now()}-${imageFile.name}`
        const resFile = await Storage.put(filename, imageFile, {
            contentType: imageFile.type
        })        

        const data = {
            name: product,
            owner: owner,
            description: description,
            image: imageFile,
            price: price,
            shipped: shipped
        }
        // const res = await API.graphql(graphqlOperation(createProduct, { input: data}))
        console.log('e in submit', data);
        setPrice(0)
        setProduct('')
        setDescription('')
        setImageFile('')
    }

    return (
        <>  
        <form>
            <div className="block block-flex block-add-product">
                <div className="block-top-margin">
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
                        <div className="block-flex flex-row">
                            <input type="radio" checked={shipped === true} onChange={() => setShipped(true)} />Yes
                            <input type="radio" checked={shipped === false} onChange={() => setShipped(false)} />No (Downloadable Products)
                        </div>
                    </div>
                </div>
                <div className="block-top-margin block-left-margin">
                    <div className="block">
                        {imageFile && (
                            <img src={URL.createObjectURL(imageFile)} alt="Preview" className="preview" />
                        )}
                        <input type="file" id="image" multiple onChange={e => setImageFile(e.target.files[0])} />
                            {/* <AmplifyS3ImagePicker headerTitle="Please select product image" headerHint="JPG, GIF, PNG" 
                            theme={{
                                photoPickerButton: {
                                    display: "none"
                                }
                            }} /> */}
                            {/* <AmplifyS3Image imgKey="test.png" /> */}
                    </div>
                    <div className="block-button">
                        <button type="button" className="form-button"
                        disabled={!product || !price || !description} 
                        onClick={handleSubmit}>Add Product</button>
                    </div>
                </div>        
            </div>
        </form>
        </>
    )
}

export default AddProduct
