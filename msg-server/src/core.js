import {List, Map} from 'immutable';

export function addMessage(state, text, messageId, sentFrom, createdAt) {
    return state.merge({ message: Map({text, messageId, sentFrom, createdAt})
    }
)}