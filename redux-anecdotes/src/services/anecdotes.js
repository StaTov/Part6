import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const update = async (id, newObj) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObj)
    return response.data
}
const create = async (content) => {
    const anecdoteObj = {
        content,
        votes: 0
    }
    const response = await axios.post(baseUrl, anecdoteObj)
    return response.data
}


export default {getAll, update, create}