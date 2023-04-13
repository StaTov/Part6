import {createSlice} from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const initialState = []
export const anecdotesSlice = createSlice({
    name: 'anecdotes',
    initialState,
    reducers: {
        setAnecdotes(state, action) {
            return action.payload
        },
        addAnecdote(state, action) {
            return [...state, action.payload]
        },
        addVote(state, action) {
            const newState = state.map(anecdote =>
                anecdote.id === action.payload.id
                    ? action.payload
                    : anecdote)
            return newState
        }
    }
})


export const {setAnecdotes, addAnecdote, addVote} = anecdotesSlice.actions

export const updateVotes = (anecdote) => {
    return async dispatch => {
        const id = anecdote.id
        const votedAnecdote = {...anecdote, votes: anecdote.votes + 1}
        const response = await anecdoteService.update(id, votedAnecdote)

        dispatch(addVote(response))
    }
}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()

        const sortedAnecdotes = [...anecdotes].sort((a, b) => {
            return b.votes - a.votes
        })
        dispatch(setAnecdotes(sortedAnecdotes))
    }
}

export const createAnecdote = (content) => {
    return async dispatch => {
        const createdAnecdote = await anecdoteService.create(content)
        dispatch(addAnecdote(createdAnecdote))
    }
}
export default anecdotesSlice.reducer