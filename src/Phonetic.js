import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  function audio() {
    if (props.phonetic.audio) {
      return (
        <div className="d-inline">
          <a
            className="audio"
            href={props.phonetic.audio}
            target="_blank"
            rel="noreferrer"
          >
            Listen
          </a>{" "}
        </div>
      );
    }
  }
  return (
    <div className="Phonetic">
      <span className="text">{props.phonetic.text}</span>
      {audio()}
    </div>
  );
}
