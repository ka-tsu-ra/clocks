import {Map, List} from 'immutable';
import {expect} from 'chai';

import {addClock} from '../src/core';

describe('application logic', () => {
  describe('addClock', () => {
    it('adds a first clock to the state', () => {
      const state = Map();
      const nextState = addClock(state, 'Matter-A');
      expect(nextState).to.equal(Map({
        clocks: List.of('Matter-A')
      }));
    });

    it('adds another clock to an existing list of clocks in the state', () => {
      const state = Map({
        clocks: List.of('Matter-A')
      });
      const nextState = addClock(state, 'Matter-B');
      expect(nextState).to.equal(Map({
        clocks: List.of('Matter-A', 'Matter-B')
      }));
    });
  });
});
