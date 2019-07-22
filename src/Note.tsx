import React from 'react';

function Note(props: any) {
  
  return (
    <div className="Note-content">
      <div className="Note-body">
        {props.content}
        {props.author}
      </div>
    </div>
  );
}

export default Note;