import {SEND_MESSAGE} from '../actions/send-message'

const initialState= {
    message:''
}

export default function(state=initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                message: action.payload.message
            }
        }

        default:
            return state
    }
}