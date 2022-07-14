import axios from 'axios'

const APIkey = '2gbO895DUU7mM92wAUf1P10s7RY3NGze8ERfk8sG'
const config = {
    headers: {
        'x-api-key': APIkey
    }
}

export const fetchYHFAPI = (symbol) => axios.get(`https://yfapi.net/v7/finance/options/${symbol}`, config)