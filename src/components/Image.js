import React, { Component } from "react";

// Custom app css
import "../App.css";

// Declare Search Results class
class Image extends Component {
  // Render the search results JSX based on the following:
  // Custom boxed result entry for each book with
  // Image, Title, Authors and Publisher
  render() {
    return (
      <img
        className="bookImage"
        src={this.props.imageLink}
        alt={this.props.title}
        title={this.props.title}
      />
    );
  }
}

export default Image;
