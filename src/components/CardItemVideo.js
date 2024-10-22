import React from "react";
import { Link } from "react-router-dom";

function CardItemVideo(props) {
  return (
    <>
      <div className="card">
        <Link className="cards__item__link" target="_blank" to={props.path}>
          <div className="card__image-container">
            <img src={props.src} />
          </div>
          <div className="card__content">
            <p className="card__title text--medium">{props.text}</p>
            <div className="card__info">
              <p className="text--medium">{props.label}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CardItemVideo;
