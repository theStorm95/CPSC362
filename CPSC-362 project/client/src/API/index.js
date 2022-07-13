import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'
const yahooAPI = 'https://yfapi.net/v7/finance/options/AAPL'
const APIkey = '2gbO895DUU7mM92wAUf1P10s7RY3NGze8ERfk8sG'
const config = {
    headers: {
        'x-api-key': APIkey
    }
}
export const fetchObj = () => axios.get(url)
export const fetchYHFAPI = () => axios.get(yahooAPI, config)