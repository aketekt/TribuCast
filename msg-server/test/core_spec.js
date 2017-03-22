import {List, Map} from 'immutable';
import {expect} from 'chai';

import {addMessage} from '../src/core';

describe('appication logic', () => {
    
    describe('addMessage', () => {

        it('adds messages to the state', () => {
            const state = Map();
            const messages = List.of('Hello');
            const nextState = addMessage(state, messages);
            expect(nextState).to.equal(Map({
                messages: List.of('Hello')
            }));
        });

    });
});