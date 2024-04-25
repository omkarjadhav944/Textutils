import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    //  console.log("upperCase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success: ");
  };

  const handleloClick = () => {
    //  console.log("upperCase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success: ");

  };

  // eslint-disable-next-line no-unused-vars
  const [btn, setBtn] = useState("No Underline");
  const [Underline, setUnderline] = useState({
    textDecoration: "none",
  });

  const under = () => {
    if (Underline.textDecoration === "none") {
      setUnderline({
        textDecoration: "underline",
      });
      setBtn("Underline");
      props.showAlert("Your text is now Underline", "success: ");

    } else {
      setFont({
        textDecoration: "none",
      });
      setBtn("No Underline");
      // props.showAlert("sorry not Underline", "Failed: ");
    }
  };

  const [btntext, setBtnText] = useState("Normal");
  const [font, setFont] = useState({
    fontStyle: "normal",
  });

  const italic = () => {
    if (font.fontStyle === "normal") {
      setFont({
        fontStyle: "italic",
      });
      setBtnText("Normal");
      props.showAlert("Your text is converted in italic", "success: ");

    } else {
      setFont({
        fontStyle: "normal",
      });
      setBtnText("Italic");
      // props.showAlert("sorry not it's a normal text", "Failed: ");

    }
  };

  //to change value inside box we require to use onchange
  const handleonchange = (event) => {
    // console.log("on change")
    setText(event.target.value); //to change value inside box we require to use onchange
  };

  const [text, setText] = useState("");
  //   text = "new text" // wrong way to change the text
  // setText("new text")  // correct way to change the text
  return (
    <>
              
      <h1 className="mb-4" style={{color: props.mode === 'dark'?'white':'black'}} >{props.heading} </h1>
      <div
        className="container"
        style={{
          padding: '0px',
          backgroundColor: props.mode === "dark" ? "white" : "black",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <textarea
          style={{
            fontStyle: font.fontStyle,
            textDecoration: Underline.textDecoration,
            backgroundColor: props.mode === "dark" ? "#3b64a0" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleupClick}>
        convert to UpperCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleloClick}>
        convert to LowerCase
      </button>

      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={italic}>
        {btntext}
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={under}>
        {btn}
      </button>

      <div
        className="container my-3  "
        style={{
          backgroundColor: props.mode === "dark" ? "#2e3f60" : "white",
          color: props.mode === "dark" ? "white" : "#2e3f60",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(` `).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(` `).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
