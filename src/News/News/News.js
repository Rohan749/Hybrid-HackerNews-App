import React, { useState } from "react";
import IndividualNews from "../Individual-News/IndividualNews";
import './News.css'

const News = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  let listItems = props.data?.hits
    .filter((value) => {
      if (searchTerm == "") return value;
      else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value;
      }
    })
    .map((list) => {
      return (
        <>
          <IndividualNews
            key={list.objectID}
            title={list.title}
            points={list.points}
            url={list.url}
            storyText={list.story_text}
            commentText={list.comment_text}
            numComment={list.num_comments}
          />
        </>
      );
    });

  const searchTermHandler = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div className="container mt-5 p-5">
        <input  
        placeholder="Search News"
        className="form"
        onChange={searchTermHandler}/>
      </div>
      {listItems}
    </>
  );
};

export default News;
