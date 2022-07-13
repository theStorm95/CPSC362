import * as api from '../API'

// import your action function here
export const getObj = async () => {
    try {
        const { data } = await api.fetchObj() // from api folder
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchYHFAPI = async () => {
    try {
        const { data } = await api.fetchYHFAPI()
        return data
    } catch (error) {
        console.log(error)
    }
}