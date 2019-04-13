import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnibox-backend.herokuapp.com'
})

export default api