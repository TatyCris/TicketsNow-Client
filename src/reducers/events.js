import { SET_EVENTS, ADD_EVENT } from '../actions/events'

const initialState = []

export default function events(state = initialState, { type, payload }) {
    switch (type) {
        case SET_EVENTS:
            return payload
        case ADD_EVENT:
            return [...state, payload]
        default:
            return state
    }
}