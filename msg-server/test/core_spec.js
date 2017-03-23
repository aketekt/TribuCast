import {List, Map} from 'immutable';
import {expect} from 'chai';

import {addMessage} from '../src/core';

describe('appication logic', () => {
    
    describe('addMessage', () => {

        it('adds messages to the state', () => {
            const state = Map(text, messageId);
            const text = ('Hello');
            const messageId = ('fds');
            const nextState = addMessage(state, text, messageId);
            expect(nextState).to.equal(Map({
                message: Map({
                    text: ('Hello'),
                    messageId: ('fds')
                })
              
            }));
        });

    });
});