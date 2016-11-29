import {
  applyMiddleware,
  createStore,
  combineReducers
} from 'redux';

import cursor from './ducks/cursor';
import map from './ducks/map';
import slider from './ducks/slider';
import text from './ducks/text';

import {storageMiddleware} from './middleware';

export default function() {
  const reducers = combineReducers({
    cursor,
    map,
    slider,
    text
  });

  return createStore(
    reducers,
    applyMiddleware(
      storageMiddleware()
    )
  );
}
