export const SEND_MESSAGE = 'SEND_MESSAGE'

export default function sendMessage(state,message) {
    return {
        type: SEND_MESSAGE,
        payload: { message },
    }
}