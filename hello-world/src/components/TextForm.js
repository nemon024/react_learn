import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("upper case was clicked: " + text)
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick= () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChanged =(event) =>{
    // console.log("on change")
    setText(event.target.value)
    
  }
  const [text, setText] = useState("Enter text here");
  // text = "new Text"; //Wrong way to change the state
  // setText('new Text'); // Correct way to change the state
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text}onChange={handleOnChanged} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower case</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words , {text.length} characters</p>
      <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
    
  )
}
