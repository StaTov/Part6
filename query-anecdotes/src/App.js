import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {useQuery, useMutation, useQueryClient} from "react-query";
import {getAll, updateVotes} from "./services/requests";
import {useNotificationDispatch} from "./AnecdoteContext";
import React from "react";

const App = () => {
    const dispatch = useNotificationDispatch()
    const queryClient = useQueryClient()
    const updateAnecdoteMutation = useMutation(updateVotes, {
        onSuccess: () => {
            queryClient.invalidateQueries('anecdotes')
        }
    })
    const showNote = (text) => {
        dispatch({type: 'SHOW_NOTE', payload: text})
        setTimeout(() => {
            dispatch({type: 'SHOW_NOTE', payload: ''})
        }, 4000)}

        const handleVote = (anecdote) => {
            updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
            showNote(`Now '${anecdote.content}' has ${anecdote.votes} votes`)

        }
        const {isLoading, isError, data, error} = useQuery('anecdotes', getAll, {
            retry: false,
            refetchOnWindowFocus: false
        })

        if (isLoading) {
            return <div>Loading...</div>
        }
        if (isError) {
            return (<div>
                anecdote service not available due to problems in server.<br/> Error message:{' '}{error.message}
            </div>)
        }
        const anecdotes = [...data].sort((a, b) => {
            return b.votes - a.votes
        })
        return (<div>
            <h3>Anecdote app</h3>

            <Notification/>
            <AnecdoteForm/>
            {anecdotes.map(anecdote => <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => handleVote(anecdote)}>vote</button>
                </div>
            </div>)}
        </div>)
    }

    export default App
