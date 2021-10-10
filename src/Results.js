import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  let results = props.results;
  if (results === null) {
    return <p>testing</p>;
  } else {
    return (
      <div className="Results">
        <h2>{results.word}</h2>
        <h4>{results.phonetics[0].text}</h4>
        {results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  }
}
