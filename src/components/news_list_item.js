import React from "react";
import "../css/styles.css";

const NewsItem = ({ item }) => {
  return (
    <div className="news_item">
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  );
};

export default NewsItem;

/* Using Glamor Library
import { css } from "glamor";
...

const NewsItem = ({ item }) => {
  let news_item = css({
    padding: "20px",
    boxSizing: "border-box",
    borderBottom: "1px solid grey",
    ":hover": {
      color: "purple",
      fontWeight: "bold"
    },
    "@media(max-width: 500px)": {
      color: "red"
    }
  });

  let item_grey = css({
    background: "lightgrey"
  });

  return (
    <div {...news_item} {...item_grey}>
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  );
};




*/
