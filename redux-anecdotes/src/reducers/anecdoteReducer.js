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
                anecdote.id === action.payload
                    ? {...anecdote, votes: anecdote.votes + 1}
                    : anecdote)
            return newState.sort((a, b) => {
                return b.votes - a.votes
            })
        }
    }
})


export const {setAnecdotes, addAnecdote, addVote} = anecdotesSlice.actions

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes))
    }
}

export const createAnecdote = (content) => {
    return async dispatch => {
        const createdAnecdote = await anecdoteService.create(content)
        dispatch(addAnecdote(createdAnecdote))
    }
}
export default anecdotesSlice.reducer