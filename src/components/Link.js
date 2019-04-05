import React, { Component } from "react";

// Custom app css
import "../App.css";

// Custom Link component
import Image from "./Image";
import Title from "./Title";

// Declare Search Results class
class Link extends Component {
  /**
   * Can you find a way to pull the html out into separate
   * files from the logic?
   *
   * See Image and Title tags below
   */

  // Render the search results JSX based on the following:
  // Custom boxed result entry for each book with
  // Image, Title, Authors and Publisher
  render() {
    return (
      <a
        className="book"
        href={this.props.infoLink}
        target="_blank"
        rel="noopener noreferrer"
        title={this.props.title}
      >
        <Image
          imageLink={this.props.imageLink}
          title={this.props.title}
        />
        <Title
          title={this.props.title}
          authors={this.props.authors}
          publisher={this.props.publisher}
        />
      </a>
    );
  }
}

export default Link;
