import React from 'react';
import {addAnecdote} from "../reducers/anecdoteReducer";
import {useDispatch} from "react-redux";

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const newAnecdote = (e) => {
        e.preventDefault()
        const content = e.target.content.value
        e.target.content.value = ''
        dispatch(addAnecdote(content))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={newAnecdote}>
                <div><input name="content"/></div>
                <button type="submit">
                    create
                </button>
            </form>
        </div>
    );
};

export default AnecdoteForm;