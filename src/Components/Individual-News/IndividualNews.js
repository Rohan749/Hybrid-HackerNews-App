import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import './IndividualNews.css'

const IndividualNews = (props) => {
  const [view, setView] = useState(false);

  const viewDetailsHandler = () => {
    setView(true);
  };

  const closeDetailsHandler = () => {
    setView(false);
  };

  return (
    <>
      <div
        onClick={viewDetailsHandler}
        className="container container-headlines mt-5 p-5"
        style={{ cursor: "pointer" }}
      >
        {props.title}
      </div>
      {view && (
        <div>
          <Modal show={true}>
            <Modal.Body className="modal__box">
            <a href={props.url}><Modal.Header className="modal__header">{props.title}<span className="read__more">Continue reading...</span></Modal.Header></a>
                <div className="news__points">Points: {props.points}</div> 
                <div className="news__points">Story Texts: {props.storyTexts}</div>
                <div className="news__points">Comment Texts: {props.commentText}</div> 
                <div className="news__points">Num Comments: {props.numComment}</div> 
                <Modal.Footer>
                <button className="close__button" onClick={closeDetailsHandler}>Close</button>
            </Modal.Footer>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

export default IndividualNews;
