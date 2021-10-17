import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img src={photo.src.tiny} alt="" className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
        <div className="attribution">
          <a target="_blank" rel="noreferrer" href="https://www.pexels.com">
            Photos provided by Pexels
          </a>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
