import { ADD_NOTE, setNotes, SET_NOTES } from "./actions"

const initialState = {
  notes: []
}

export const notesReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_NOTE: {
      return {...state, notes: [...state.notes, action.payload]}
    }
    case SET_NOTES: {
      return {...state, notes: action.payload}
    }
    default:
      return state
  }
}

export const saveNotes = () => async (dispatch, getState) => {
  console.log(getState)
  const notes = getState().notes;
  localStorage.setItem('places', JSON.stringify(notes));

} 

export const loadNotes = () => async (dispatch, getState) => {
   const notes = JSON.parse(localStorage.getItem('places'));
   dispatch(setNotes(notes))
} 