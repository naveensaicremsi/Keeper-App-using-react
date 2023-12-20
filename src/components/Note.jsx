import React from "react";




function Note(props) {


  function handleOnclick(e)
  {
    e.preventDefault();
    console.log("deleteme");
    console.log(props.id);
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleOnclick}>DELETE</button>
    </div>
  );
}

export default Note;
