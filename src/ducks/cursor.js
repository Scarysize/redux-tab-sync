const UPDATE = 'cursor/UPDATE';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  if (action.type === UPDATE) {
    return {
      x: action.x,
      y: action.y
    };
  }

  return state;
}

export function updateCursor(x, y) {
  return {type: UPDATE, x, y};
}
