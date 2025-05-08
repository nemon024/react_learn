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

  const handleClearClick = () =>{
    setText('');
  }

  const  handleSentenceClick = () =>{
    let newText = text.toLowerCase()
    .replace(/(^\s*\w|(?<=[.!?]\s*)\w)/g,
      m => m.toUpperCase())
   setText(newText)
  }
 
  const handleCopy = () =>{
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
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
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text}onChange={handleOnChanged} style={{background: props.mode === 'dark' ? 'grey' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Convert To Sentence</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy the value</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words , {text.length} characters</p>
      <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ? text: 'Enter something in the textbox above to preview it here' }</p>

    </div>
    </>
    
  )
}
