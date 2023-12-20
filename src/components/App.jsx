import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setnotes] = useState([])

  function        deleteme(id) {
    setnotes((previousnotes) => {
      return previousnotes.filter((item, index) => {
        return index !== id;
      })
    })
  }
  function CreateNote(Noteitem, index) {
    return (
      <Note
        key={index}
        id={index}
        title={Noteitem.title}
        content={Noteitem.content}
        onDelete={deleteme}
      />
    )
  }

  function additem(note) {
    setnotes(
      (previousnotes) => {
        return [
          ...previousnotes,
          note
        ]
      }
    )
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={additem} />
      {notes.map(CreateNote)}
      <Footer />
    </div>
  );
}

export default App;
