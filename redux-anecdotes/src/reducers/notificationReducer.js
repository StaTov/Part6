import {createSlice} from "@reduxjs/toolkit";

const initialState = null


export const notificationSlice = createSlice({
        name: 'notification',
        initialState,
        reducers: {
            showYouVoted(state, action) {
                return state = `You voted: '${action.payload}'`
            },
            showCreateNew(state, action) {
              return state = `You created: '${action.payload}'`
            },
            deleteNotification(state){
                return state = null
            }
        }
    }
)


export const {showYouVoted, showCreateNew, deleteNotification} = notificationSlice.actions
export default notificationSlice.reducer