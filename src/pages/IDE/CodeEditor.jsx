import React from "react";
import "./CodeEditor.css";

function CodeEditor() {
  return (
    <div className="main-container">
      <div className="header">
        <h1>Editors</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="content">
            <div className="title-area">
              <h1 className="title">Java</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              illo similique optio eos eveniet deserunt
            </p>
          </div>
        </div>

        <div className="card">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="content">
            <div className="title-area">
              <h1 className="title">C lang</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              illo similique optio eos eveniet deserunt
            </p>
          </div>
        </div>

        <div className="card">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="content">
            <div className="title-area">
              <h1 className="title">Python</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              illo similique optio eos eveniet deserunt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
