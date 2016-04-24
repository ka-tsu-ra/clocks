import {List} from 'immutable';

export function addClock(state, clockName) {
  if (state.has('clocks')) {
    let allClocks = state.get('clocks').concat(List.of(clockName));
    return state.set('clocks', allClocks);
  }
  return state.set('clocks', List.of(clockName));
}
