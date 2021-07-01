import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';
import Button from '@material-ui/core/Button';
import './inputSection.css'

const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const name = useSelector(state => state.inputs.name);
  const email = useSelector(state => state.inputs.email);
  const ic = useSelector(state => state.inputs.ic);
  const dispatch = useDispatch();

  
  const addNote = () => {
    if(name && email && ic ) {
      dispatch(noteActions.addNote({
        name,
        email,
        ic,
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateNote = () => {
    if(name && email && ic ) {
      dispatch(noteActions.updateNote(id, {
        name,
        email,
        ic,
      }))
      dispatch(inputActions.resetInputs())
    }    
  }

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }

  return (
    <div className="">
      <form className="myForm">
      <input
        type="text"
        className="formField"
        placeholder="NAME"
        value={name}
        onChange={e => 
          dispatch(inputActions.setInputName(e.target.value))
        }
      />
      <input
        type="email"
        className="formField"
        placeholder="Email"
        value={email}
        onChange={e => 
          dispatch(inputActions.setInputEmail(e.target.value))
        }
      />
      <input
        type="text"
        className="formField"
        placeholder="ic"
        value={ic}
        onChange={e => 
          dispatch(inputActions.setInputIc(e.target.value))
        }
      />
      
      
      <div
        className="InputSection__container__btnWrapper"
      >
        <Button
        variant="contained" 
        color="primary" 
        center
          onClick={id === 0 ? addNote : updateNote}
        >
          {id === 0 ? "ADD NOTE" : "UPDATE NOTE"}
        </Button>      
        {id !==  0 &&
          <Button
          variant="contained" 
          color="primary" 
            onClick={deleteNote}
            style={{ marginLeft: '1em', backgroundColor: 'red' }}
          >
            DELETE NOTE
          </Button>
        }
      </div>
      </form>
    </div>
  );
};

export default InputSection;
