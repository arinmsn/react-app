import React from "react";
import "../css/styles.css";

const Header = props => {
  return (
    <header>
      <div className="logo">Logo</div>
      <input type="text" onChange={props.keywords} />
    </header>
  );
};

export default Header;

/* App still works without the 

  state = {
      keywords: ""
    };

    inputChangeHandler = event => {
      const value = event.target.value === "" ? false : true;

      this.setState({
        keywords: event.target.value
      });
    };

*/
