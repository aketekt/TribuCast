import {List, Map} from 'immutable';

export function addMessage(state, text, messageId, location) {
    return state.merge({ message: Map({text, messageId, location})}
       
    )
}