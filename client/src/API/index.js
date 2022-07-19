import axios from 'axios'

const APIkey = '2gbO895DUU7mM92wAUf1P10s7RY3NGze8ERfk8sG'
const config = {
    headers: {
        'x-api-key': APIkey
    }
}

export const fetchYHFAPI = (symbol) => axios.get(`https://yfapi.net/v7/finance/options/${symbol}`, config)
export const fetchRecomendationData = (symbol) => axios.get(`https://yfapi.net/ws/insights/v1/finance/insights?symbol=${symbol}`, config)
export const fetchTrendingUS = () => axios.get('https://yfapi.net/v1/finance/trending/US', config)