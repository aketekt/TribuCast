import {List, Map} from 'immutable';
import {expect} from 'chai';

import {addMessage} from '../src/core';

describe('appication logic', () => {
    
    describe('addMessage', () => {

        it('adds messages to the state', () => {
            const state = Map(text, messageId, location);
            const text = ('Hello');
            const messageId = ('fds');
            const location = ('1223');
            const nextState = addMessage(state, text, messageId, location);
            expect(nextState).to.equal(Map({
                message: Map({
                    text: ('Hello'),
                    messageId: ('fds'),
                    location: ('1223')

                })
              
            }));
        });

    });
});