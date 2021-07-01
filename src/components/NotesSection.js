import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/actions/inputActions';

const NotesSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes);

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputName(item.name));
    dispatch(inputActions.setInputEmail(item.email));
    dispatch(inputActions.setInputIc(item.ic));
  }

  if(notes.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p>There is no note yet. Please add one.</p>
      </div>  
    )
  }

  return (
    <div className="NotesSection__container">
      {notes.map((item, index) => {
        if(item) {
          return (
            <NoteItem
              name={item.name}
              email={item.email}
              ic={item.ic}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />      
          )
        }
        return null;
      })}
    </div>
  );
};

export default NotesSection;
