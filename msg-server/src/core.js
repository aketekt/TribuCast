import {List} from 'immutable';

export function addMessage(state, messages) {
    return state.set('messages', List(messages));
}