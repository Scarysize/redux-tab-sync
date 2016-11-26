import {
  applyMiddleware,
  createStore,
  combineReducers
} from 'redux';

import map from './ducks/map';
import slider from './ducks/slider';
import text from './ducks/text';

import {storageMiddleware} from './middleware';

export default function() {
  const reducers = combineReducers({
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
