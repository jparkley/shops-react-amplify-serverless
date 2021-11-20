import { useState } from 'react'
import { API, graphqlOperation, Storage, Auth } from 'aws-amplify'
// import { AmplifyS3ImagePicker, AmplifyS3Image } from '@aws-amplify/ui-react'
import aws_exports from '../../aws-exports'
import { createProduct, updateProduct } from '../../graphql/mutations'
// import { useContext } from 'react'
// import { userContext } from '../../App'

const ProductForm = ({owner, shopId, isUpdate, product, style} ) => {

    const [name, setName] = useState(product ? product.name : '')
    const [price, setPrice] = useState(product ? product.price : 0)
    const [description, setDescription] = useState(product ? product.description : '')
    const [shipped, setShipped] = useState(product ? product.shipped : true)
    const [imageFile, setImageFile] = useState('')

    /*  user from userContext: currentAuthenticatedUser
        id from currentCredentials */
    // const user = useContext(userContext)

    const handleSubmit = async (e) => {

        e.preventDefault()
        const { identityId } = await Auth.currentCredentials()
        const { username } = await Auth.currentAuthenticatedUser();

        const input = {
            name: name,
            productShopId: shopId,
            owner: username,
            description: description,
            price: price,
            shipped: shipped
        }

        if (!isUpdate) {
            /* Save image file first */
            const filename = `${identityId}/${imageFile.name}`
            const resFile = await Storage.put(filename, imageFile, {
                contentType: imageFile.type
            })
            const file = {
                key: resFile.key,
                bucket: aws_exports.aws_user_files_s3_bucket,
                region: aws_exports.aws_project_region
            }
            Object.assign(input, {image: file})
        } else {
            Object.assign(input, {id: product.id})
        }
        // console.log('final input:', input);

        try {
            const res = await API.graphql(graphqlOperation(isUpdate ? updateProduct : createProduct, { input }))            
            // console.log('res:', res);
            setPrice(0)
            setName('')
            setDescription('')
            setImageFile('')    
        } catch(error) {
            console.log('error in submit', error);
        }
    }

    return (
        <>  
        <form className={style || ""}>
            <div className="block block-flex block-add-product">
                <div className="block-top-margin">
                    <div className="form-element-grid">
                        <label htmlFor="name">Product Name: </label>
                        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="form-element-grid">
                        <label htmlFor="price">Price: </label>
                        <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} required />
                    </div>
                    <div className="form-element-grid">
                        <label htmlFor="description">Description: </label>
                        <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} required />
                    </div>
                    <div className="form-element-grid">
                        <label htmlFor="shipped">Will Ship: </label>
                        <div className="block-flex flex-row">
                            <input type="radio" checked={shipped === true} onChange={() => setShipped(true)} />Yes
                            <input type="radio" checked={shipped === false} onChange={() => setShipped(false)} />No (Downloadable Products)
                        </div>
                    </div>
                </div>
                <div className="block-top-margin block-left-margin">
                    {!isUpdate && (
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
                    )}
                    <div className="block-button">
                        <button type="button" className="btn"
                        disabled={!name || !price || !description} 
                        onClick={handleSubmit}>{ isUpdate ? 'Update' : 'Add Product'}</button>
                    </div>
                </div>    
            </div>
        </form>
        </>
    )
}

export default ProductForm
