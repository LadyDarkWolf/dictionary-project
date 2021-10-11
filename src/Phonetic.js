import React from "react";

export default function Phonetic(props) {
  function audio() {
    if (props.phonetic.audio) {
      return (
        <div>
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
      {props.phonetic.text}
      {audio()}
    </div>
  );
}
