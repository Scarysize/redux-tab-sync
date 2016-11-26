const UPDATE = 'map/UPDATE';

const initialState = {
  center: [
    29.688329407426636,
    51.01026517655359
  ],
  zoom: 1
};

export default function reducer(state = initialState, action = {}) {
  if (action.type === UPDATE) {
    return Object.assign({}, state, {
      center: action.center,
      zoom: action.zoom
    });
  }

  return state;
}

export function updateMap(center, zoom) {
  return {type: UPDATE, center, zoom};
}
