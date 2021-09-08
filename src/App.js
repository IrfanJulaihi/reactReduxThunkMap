import React,{ useState } from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "./actions";
import { saveNotes, loadNotes } from "./notesReducer";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
function App() {
  // const YOUR_GOOGLE_MAPS_API_KEY="AIzaSyB_xff7D6Fa4ZyjQaLMuBsU6nrJLEEI3kI"
  const YOUR_GOOGLE_MAPS_API_KEY="AIzaSyB_xff7D6Fa4ZyjQaLMuBsU6nrJLEEI3kI"
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const onAddNote = (note) => {
  
    dispatch(addNote(note.label));
  };

  const onSave = (note) => {
    dispatch(saveNotes(note));
  };

  const onLoad = () => {
    dispatch(loadNotes());
  };
  const [value, setValue] = useState();
  return (
    <>
    <GooglePlacesAutocomplete
  apiKey={YOUR_GOOGLE_MAPS_API_KEY}
  selectProps={{
    onChange:onAddNote
  }}
  autocompletionRequest={{
        bounds: [
      { lat: 50, lng: 50 },
      { lat: 100, lng: 100 }
    ],
    componentRestrictions: {
    country: ['my'],
    }
  }}
  onLoadFailed={(error) => (
    console.error("Could not inject Google script", error)
  )}
/>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      
      <br/>
      <br/>
      <br/>
      <br/> <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/> <br/>
      <br/>
  
      <br/>
      {value}



      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
      <hr />
     
      <button onClick={onSave}>Save</button>
      <button onClick={onLoad}>Load</button>
    </>
  );
}

export default App;