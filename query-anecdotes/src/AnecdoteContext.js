import {createContext, useReducer, useContext} from "react";

const notificationReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_NOTE':
            return action.payload
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [note, noteDispatch] = useReducer(notificationReducer, '')

    return (
        <NotificationContext.Provider value={[note, noteDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotificationValue = () => {
    const noteAndDispatch = useContext(NotificationContext)
    return noteAndDispatch[0]
}

export const useNotificationDispatch = () => {
    const noteAndDispatch = useContext(NotificationContext)
    return noteAndDispatch[1]
}

