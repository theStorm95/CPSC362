import axios from 'axios'

const APIkey = '7aAoNYUrrX1vHmfkkmXEV3vfvVonpkB18VCkny1I'
const config = {
    headers: {
        'x-api-key': APIkey
    }
}

export const fetchYHFAPI = (symbol) => axios.get(`https://yfapi.net/v7/finance/options/${symbol}`, config)
export const fetchRecomendationData = (symbol) => axios.get(`https://yfapi.net/ws/insights/v1/finance/insights?symbol=${symbol}`, config)