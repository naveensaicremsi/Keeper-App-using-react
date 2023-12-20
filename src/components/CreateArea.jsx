import React, { useState } from "react";

function CreateArea(props) {
  
  const [note,setnote]=useState(
    {
      title:"",
      content:""
    }
  )
function handleOnchange(e)
{
  const {name,value}=e.target;
  return(
    setnote(
      (prevnote)=>
      {
          return (
          {
            ...prevnote,
            [name]:value
          }
          )
      }
    )
  )
}

function handleOnclick(e)
{
  e.preventDefault();
  props.onAdd(note);
  setnote(
    {title:"",
    content:""
    }
  )
}

  return (
    <div>
      <form>
        <input onChange={handleOnchange} spellCheck="false" value={note.title}  name="title" placeholder="Title" />
        <textarea onChange={handleOnchange} spellCheck="false" value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleOnclick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
