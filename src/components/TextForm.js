import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked!");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change!");
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} character.
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read the texts.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
