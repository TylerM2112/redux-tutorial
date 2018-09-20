const initialState = {
  name: "Tyler",
  age: 29,
  hairColor: 'brown'
}


// Action Listener
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_HAIR = "UPDATE_HAIR";

// Dispatches
export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name,
  };
};

export function updateAge(age) { 
  return {
    type: UPDATE_AGE,
    payload: age,
  };
};

export function updateHairColor(hairColor) { 
  return {
    type: UPDATE_HAIR,
    payload: hairColor,
  };
};

// Reducers
export default function (state = initialState, action) { 
  switch (action.type) { 
    case UPDATE_NAME:
      return { ...state, name: action.payload}
    case UPDATE_AGE:
      return { ...state, age: action.payload}
    case UPDATE_HAIR:
      return { ...state, hairColor: action.payload }
    default:
      return state;
  };
};
