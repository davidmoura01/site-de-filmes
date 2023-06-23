import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '2ae39445fb04e0f0bcb7a01c236f044e',
        language: 'pt-BR',
        page: 1
    }
})

export default api