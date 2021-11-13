import { useState, useContext } from 'react'
import { API, graphqlOperation, Storage, Auth } from 'aws-amplify'
// import { AmplifyS3ImagePicker, AmplifyS3Image } from '@aws-amplify/ui-react'
import aws_exports from '../../aws-exports'
import { createProduct } from '../../graphql/mutations'
// import { userContext } from '../../App'

const AddProduct = ({owner, shopId}) => {
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [shipped, setShipped] = useState(true)
    const [imageFile, setImageFile] = useState('')

    /*  user from userContext: currentAuthenticatedUser
        id from currentCredentials */
    // const user = useContext(userContext)

    const handleSubmit = async (e) => {

        e.preventDefault()
        const { identityId } = await Auth.currentCredentials()

        /* Save image file first */
        const filename = `${identityId}/${imageFile.name}`
        const resFile = await Storage.put(filename, imageFile, {
            contentType: imageFile.type
        })        
        //console.log('resFile', resFile);

        const file = {
            key: resFile.key,
            bucket: aws_exports.aws_user_files_s3_bucket,
            region: aws_exports.aws_project_region
        }

        const { username } = await Auth.currentAuthenticatedUser(); 

        const input = {
            name: product,
            productShopId: shopId,
            owner: username,
            description: description,
            image: file,
            price: price,
            shipped: shipped
        }        

        try {
            const res = await API.graphql(graphqlOperation(createProduct, { input }))
            console.log('createdProduct:', res);
            setPrice(0)
            setProduct('')
            setDescription('')
            setImageFile('')
    
        } catch(error) {
            console.log('error in submit', error);
        }
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
