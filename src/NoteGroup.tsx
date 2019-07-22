import React from 'react';
import Note from './Note';

function NoteGroup(props: any) {
  let i: number = 0;
  return ( 
    props.collection.map( (note: string[])  => (
      <div
        key={`${props.category}-note-${i+=1}`}
        className="NoteList-container"
      >
        <Note content={note[0]} author={note[1]} />
      </div>
    )) 
  );
}

export default NoteGroup;


