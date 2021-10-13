import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  let meaning = props.meaning;
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
