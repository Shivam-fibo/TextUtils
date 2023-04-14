import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase is clicked" + text)
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handledownClick=()=>{
        let newText2 = text.toLowerCase()
        setText(newText2);
    }
    const handleOnChange=(event)=>{
        // console.log(" On Change")
        setText(event.target.value)
    }

    const [text, setText]= useState("Enter  text here")
    // settext=("Enter here")
    return (
        <div> 
            <h2>{props.heading}</h2>
            <div className="mb-3">

                <textarea className="form-control"  value={text} id="myBox" rows="9" onChange={handleOnChange} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            
            <button className="btn btn-primary mx-3" onClick={handledownClick}>Convert to LowerCase</button>
        </div>
    )
}
