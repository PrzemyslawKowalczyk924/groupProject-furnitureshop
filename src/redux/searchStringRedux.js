// selectors
export const getSearchString = (state) => state.searchString; 

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const changeSearchString = (payload) => ({ payload, type: CHANGE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload; 
    default:
      return statePart;
  }
}
