import {OffersProcess} from '../../types/state';
import {offersProcess, setHoverCityIdAction} from './offers-process';

describe('Reduser: offers-process', () => {
  let state: OffersProcess;

  beforeEach(() => {
    state = {
      hoverCityId: null,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offersProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({hoverCityId: null});
  });

  describe('setHoverCityIdAction test', () => {
    it('should set hover city id to state', () => {
      expect(offersProcess.reducer(state, {type: setHoverCityIdAction.type, payload: 1}))
        .toEqual({hoverCityId: 1});
    });
  });
});
