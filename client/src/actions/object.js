import * as api from '../API'

// import your action function here

export const fetchYHFAPI = async (symbol) => {
    try {
        const { data } = await api.fetchYHFAPI(symbol)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchRecomendationData = async (symbol) => {
    try {
        const {data} = await api.fetchRecomendationData(symbol)
        return data
    } catch (error) {
        console.log(error)
    }
}