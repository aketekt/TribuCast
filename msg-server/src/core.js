import {List, Map} from 'immutable';

export function addMessage(state, text, messageId) {
    return state.merge({ message: Map({text, messageId})}
       
    )
}