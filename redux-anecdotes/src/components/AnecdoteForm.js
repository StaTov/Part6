import React from 'react';
import { createAnecdote} from "../reducers/anecdoteReducer";
import {useDispatch} from "react-redux";
import {setNotification} from "../reducers/notificationReducer";


const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const newAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.content.value
        e.target.content.value = ''

        dispatch(createAnecdote(content))
        dispatch(setNotification(`You added '${content}'`, 5000))

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