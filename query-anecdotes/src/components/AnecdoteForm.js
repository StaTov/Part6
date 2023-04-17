import {useQueryClient, useMutation} from "react-query";
import {createAnecdote} from '../services/requests';
import {useNotificationDispatch} from "../AnecdoteContext";

const AnecdoteForm = () => {

    const dispatch = useNotificationDispatch()
    const queryClient = useQueryClient()
    const showNote = (text) => {
        dispatch({type: 'SHOW_NOTE', payload: text})
        setTimeout(() => {
            dispatch({type: 'SHOW_NOTE', payload: ''})
        }, 4000)
    }

    const newAnecdoteMutation = useMutation(createAnecdote, {
        onSuccess: () => {
            queryClient.invalidateQueries('anecdotes')
        },
        onError: () => {
            showNote('too short anecdote, must have length 5 or more')
        },
    })

    const onCreate = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        newAnecdoteMutation.mutate({content, votes: 0})
        showNote(`You added '${content}'`)

    }

    return (
        <div>
            <h3>create new</h3>
            <form onSubmit={onCreate}>
                <input name='anecdote'/>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm
