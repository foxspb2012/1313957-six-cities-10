import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getActiveOffer = (state: State): number | null => state[NameSpace.Offers].hoverCityId;
