import React from 'react';
import {addAnecdote} from "../reducers/anecdoteReducer";
import {useDispatch} from "react-redux";
import {showCreateNew, deleteNotification} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const newAnecdote = (e) => {
        e.preventDefault()
        const content = e.target.content.value
        e.target.content.value = ''
        dispatch(addAnecdote(content))
        setTimeout(() => {
            dispatch(deleteNotification())
        }, 5000)
        dispatch(showCreateNew(content))
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