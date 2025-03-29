import axios from 'axios'

export const fetchProductData = async (barcode) => {
    try {
        const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}`);
        const data = response.data
        if (data.status === 1) {
            // console.log("Full product: ", data.product)
            console.log("Name: ", data.product.brands)
            console.log("Nutriments: ", data.product.nutriments)
            console.log("Calories: ", data.product.nutriments["energy-kcal"])
            return data
        } else {
            throw new Error('Product not found')
        }
    } catch (error) {
        console.log(error)
        return; 
    }
}