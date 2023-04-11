import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import {showYouVoted, deleteNotification} from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(store => {
            if (!store.filter) {
                return store.anecdotes
            }
            return store.anecdotes.filter(anecdote => anecdote.content.includes(store.filter))
        }
    )
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(addVote(id))
    }
    const showNote = (content) => {
        dispatch(showYouVoted(content))
    }
    const deleteNote = () => {
        return dispatch(deleteNotification())
    }
    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => {
                            setTimeout(() => {deleteNote()}, 5000)
                            showNote(anecdote.content)
                            vote(anecdote.id)
                        }}>vote
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnecdoteList;