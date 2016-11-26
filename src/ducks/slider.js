const UPDATE = 'slider/UPDATE';

const initialState = 10;

export default function reducer(state = initialState, action = {}) {
  if (action.type === UPDATE) {
    return action.value;
  }

  return state;
}

export function updateSlider(value) {
  return {type: UPDATE, value};
}
