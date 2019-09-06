import React, { Component } from "react";
import ReactDOM from "react-dom";
import JSON from "./db.json";

//  Components
import Header from "./components/header";
import NewsList from "./components/news_list";

class App extends Component {
  state = {
    news: JSON,
    filtered: []
  };

  getKeyword = event => {
    //console.log(event.target.value);
    let keyword = event.target.value;
    let filtered = this.state.news.filter(item => {
      return item.title.indexOf(keyword) > -1; // If it's true
    });
    //console.log(filtered);
  };

  render() {
    return (
      <div>
        <Header keywords={this.getKeyword} />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
