const UPDATE = 'text/UPDATE';

const initialState = '';

export default function reducer(state = initialState, action = {}) {
  if (action.type === UPDATE) {
    return action.value;
  }

  return state;
}

export function updateText(value) {
  return {type: UPDATE, value};
}
