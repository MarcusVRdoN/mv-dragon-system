import axios from 'axios'

const baseURL = 'https://5f48079f95646700168da2ee.mockapi.io/api/v1'

const api = axios.create({ baseURL})

export default api