import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("Enter Your text here");
  const [mail, setMail] = useState([""]);
  // const [fword, setFword] = useState("");

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleEmailFinder = () => {
    let word = text.split(" ");
    let emails = [];
    word.forEach((element) => {
      if (element.includes("@")) {
        emails.push(element);
        setMail(emails.join(", "));
      } else {
        setMail([""]);
      }
    });
  };

  const handleRverseText = () => {
    let char = text.split("");
    let newText = char.reverse().join("");
    setText(newText);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To Clipboard","success");
  };

  // const handleFindText = () => {};

  // const handleReplaceText = () => {};

  const handleClearAll = () => {
    setText("");
  };
  return (
    <>
      <div
        className="container"
        style={props.style}
      >
        <div className="container">
          <h1>{props.header}</h1>
          <div className="mb-3" data-bs-theme={props.theme}>
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpperCase}>
            To Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
            To Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleEmailFinder}>
            Find Email
          </button>
          <button className="btn btn-primary mx-2" onClick={handleRverseText}>
            Reverse Text
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={handleCopyToClipboard}
          >
            Copy to Clipboard
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearAll}>
            Clear All
          </button>
          {/* <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleFindText}
            id="myBox"
            rows="1"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleFindText}>
          Find
        </button>
        <div className="mb-3">
          <textarea
          className="form-control"
          onChange={handleFindText}
            id="myBox"
            rows="1"
            ></textarea>
            </div>
        <button className="btn btn-primary" onClick={handleReplaceText}>
        Replace
        </button> */}
        </div>
        <div class="container my-3">
          <h1>Text Summary</h1>
          <p>Number of words {text.split(" ").length}</p>
          <p>Number of characters {text.length}</p>
        </div>
        <div class="container">
          <h1>Email from the text</h1>
          <p>Emails: {mail}</p>
        </div>
      </div>
    </>
  );
}
