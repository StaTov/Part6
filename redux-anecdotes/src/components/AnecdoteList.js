import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {updateVotes} from '../reducers/anecdoteReducer'
import { setNotification} from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(store => {
            if (!store.filter) {
                return store.anecdotes
            }
            return store.anecdotes.filter(anecdote => anecdote.content.includes(store.filter))
        }
    )
    const dispatch = useDispatch()


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
                            dispatch(setNotification(`You voted '${anecdote.content}'`, 5000))
                            dispatch(updateVotes(anecdote))
                        }}>vote
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnecdoteList;