import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'
export const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export const createAnecdote = async (newObj) => {
    const response = await axios.post(baseUrl, newObj)
    return response
}
export const updateVotes = async (updatedAnecdote) => {
    const response = await axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote)
    return response
}