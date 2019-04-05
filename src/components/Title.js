import React, { Component } from "react";

// Custom app css
import "../App.css";

// Declare Search Results class
class Link extends Component {
  // Render the search results JSX based on the following:
  // Custom boxed result entry for each book with
  // Image, Title, Authors and Publisher
  render() {
    return (      
        <div className="titleText">
          Title: {this.props.title}
          <br />
          Authors: {this.props.authors}
          <br />
          Publisher: {this.props.publisher}
        </div>
    );
  }
}

export default Link;
