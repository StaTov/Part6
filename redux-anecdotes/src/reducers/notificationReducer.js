import {createSlice} from "@reduxjs/toolkit";

const initialState = null


export const notificationSlice = createSlice({
        name: 'notification',
        initialState,
        reducers: {
            createNotification(state, action) {
                return state = action.payload
            },
            clearNotification(state) {
                return state = null
            }
        }
    }
)


export const {createNotification, clearNotification} = notificationSlice.actions

export const setNotification = (text, time) => {
    return dispatch => {
        dispatch(createNotification(text))

        setTimeout(() => {
            dispatch(clearNotification())
        }, time)
    }
}

export default notificationSlice.reducer