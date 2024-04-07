import axios from 'axios'
const api = axios.create({
    baseURL: 'https://v2.api.noroff.dev/online-shop',
})

export const getProducts = async () => {
    try {
        const response = await api.get()
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getProduct = async (id) => {
    try {
        const response = await api.get(`/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}