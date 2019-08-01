import React from 'react';

function NoteGroup(props: any) {
  let i: number = 0;
  return ( 
    props.collection.map( (note: string[])  => (
      <div
        key={`${props.category}-note-${i+=1}`}
        className="Note-container"
      >
        <div className="Note-body">
          {note[0]}
          {note[1]}
        </div>
      </div>
    )) 
  );
}

export default NoteGroup;


