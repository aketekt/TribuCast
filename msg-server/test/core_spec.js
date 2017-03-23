import {List, Map} from 'immutable';
import {expect} from 'chai';

import {addMessage} from '../src/core';

describe('appication logic', () => {
    
    describe('addMessage', () => {

        it('adds messages to the state', () => {
            const state = Map(text, messageId, sentFrom, createdAt);
            const text = ('Hello');
            const messageId = ('fds');
            const sentFrom = ('1223');
            const createdAt = (toString(new Date()));
            const nextState = addMessage(state, text, messageId, sentFrom, createdAt);
            expect(nextState).to.equal(Map({
                message: Map({
                    text: ('Hello'),
                    messageId: ('fds'),
                    sentFrom: ('1223'),
                    createdAt: (toString(new Date())) 
                })
            }));
        });
    });
});