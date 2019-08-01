import React, { useState, useEffect } from 'react';
import NoteGroup from './NoteGroup';

let notesCodeNr: number = 3;
let notesUxNr: number = 1;
let notesGeneralNr: number = 1;

function FetchAndShow(props: any) {

  const [err, setErr] = useState<any>();
  const [notesCodeStorage, setNotesCode] = useState<string[]>([]);
  const [notesUxStorage, setNotesUX] = useState<string[]>([]);
  const [notesGeneralStorage, setNotesGeneral] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  function fetchNotes(category: string, notesNr: number) {
    let newContent: any = [];
    let quantity: number = notesNr;

    for (let i = 1; i <= quantity; i++) {
      fetch(`./content/${category}-note-${i}.json`)
        .then(res => res.json())
        .then(
        (resultJson) => { 
          let tempArr: string[] = [resultJson.content, resultJson.author]; 
          newContent.push(tempArr); 

          if (category === 'code') {
            setNotesCode(newContent);
          } else if (category === 'ux') {
            setNotesUX(newContent);
          } else {
            setNotesGeneral(newContent);
          } 
          setIsLoaded(true);

        },
        (err) => {
          setErr(err);
          setIsLoaded(true);
          console.log(err);
        })
    }
  }
  
  useEffect(() => {
    fetchNotes('code', notesCodeNr);
    fetchNotes('ux', notesUxNr);
    fetchNotes('general', notesGeneralNr);
  }, []);

  if (err) {
    return <div>Error while fetching</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  if (props.isCodeFirst) {
    return (
      <section className="NoteList">
        <NoteGroup collection={notesCodeStorage} category={'code'}/>
        <NoteGroup collection={notesGeneralStorage} category={'general'}/>
        <NoteGroup collection={notesUxStorage} category={'ux'}/>
      </section>
    );
  };
  
  return (
    <section className="NoteList">
      <NoteGroup collection={notesUxStorage} category={'ux'}/>
      <NoteGroup collection={notesGeneralStorage} category={'general'}/>
      <NoteGroup collection={notesCodeStorage} category={'code'}/>
    </section>
  );
}

export default FetchAndShow;