import React, {Component} from 'react';
import './NoteList.css';
import NoteGroup from './NoteGroup';

let notesCodeNr: number = 3;
let notesUxNr: number = 1;
let notesGeneralNr: number = 1;

interface NLProps {
  isCodeFirst: any
}

type NLState = {
  err: any,
  isLoaded: boolean,
  notesCode: string[],
  notesUX: string[],
  notesGeneral: string[]
}

class NoteList extends Component<NLProps, NLState> {
  constructor(props: NLProps) {
    super(props);
    this.state = {
      err: null,
      isLoaded: false,
      notesCode: [],
      notesUX: [],
      notesGeneral: []
    };
  }

  fetchNotes(category: string, notesNr: number) {
    let newContent: any = [];
    let quantity: number = notesNr;

    for (let i = 1; i <= quantity; i++) {
      fetch(`./content/${category}-note-${i}.json`)
        .then(res => res.json())
        .then(
        (resultJson) => { 
          let tempArr: string[] = [resultJson.content, resultJson.author]; 
          newContent.push(tempArr); 
          this.setState({isLoaded: true})

          if (category === 'code') {
            this.setState({notesCode: newContent})
          } else if (category === 'ux') {
            this.setState({notesUX: newContent})
          } else {
            this.setState({notesGeneral: newContent})
          } 
        },
        (err) => {
          this.setState({
            isLoaded: true,
            err
          });
          console.log(err);
        })
    }
  }
  
  componentDidMount() {
    this.fetchNotes('code', notesCodeNr);
    this.fetchNotes('ux', notesUxNr);
    this.fetchNotes('general', notesGeneralNr);
  }

  render() {
    const { err, isLoaded } = this.state;

    if (err) {
      return <div>Error while fetching</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }

    const isCodeFirst :boolean = this.props.isCodeFirst;
    
    if (isCodeFirst) {
      return (
        <section className="NoteList">
        <NoteGroup collection={this.state.notesCode} category={'code'}/>
        <NoteGroup collection={this.state.notesGeneral} category={'general'}/>
        <NoteGroup collection={this.state.notesUX} category={'ux'}/>
        </section>
      );
    };
    
    return (
      <section className="NoteList">
        <NoteGroup collection={this.state.notesUX} category={'ux'}/>
        <NoteGroup collection={this.state.notesGeneral} category={'general'}/>
        <NoteGroup collection={this.state.notesCode} category={'code'}/>
      </section>
    );
  }
}

export default NoteList;