import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "./actions";
import { saveNotes, loadNotes } from "./notesReducer";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Button,TextField } from '@material-ui/core';


function App() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });
  const State = {
    showSelected:false
  }
  const handleSelect = async value => {
      dispatch(addNote(value));

  
  };
  // const YOUR_GOOGLE_MAPS_API_KEY="AIzaSyB_xff7D6Fa4ZyjQaLMuBsU6nrJLEEI3kI"
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const onAddNote = value => {
    dispatch(addNote(value.description));
    };

  const onSave = (value) => {
    dispatch(saveNotes(value));
  };

  const onLoad = () => {
    dispatch(loadNotes());
  };

  return (
    <div    style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}>


      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) =>
        (
          <div>
                <TextField id="filled-basic" label="Enter address" variant="filled" {...getInputProps({ placeholder: "Type address" })} />
                   <div>
              {loading ? <div>...loading</div> : null}
              <ul>
              </ul>
            
              {suggestions.map(suggestion => {
              
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                }; 
               
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                     <hr/>
                    <li key={suggestion}>{suggestion.description}</li>
                    <hr/>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
   
      {notes.map((note) => {
        return <li key={note}>{note}</li>;
      })}
<Button variant="contained" onClick={onSave} color="primary" >
  Save selected
</Button>
<Button variant="contained" onClick={onLoad} color="Secondary">
  Load selected
</Button>

    </div>
  );
}

export default App;