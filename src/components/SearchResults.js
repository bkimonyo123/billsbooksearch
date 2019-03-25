import React, { Component } from "react";

// Custom app css
import "../App.css";

// Declare Search Results class
class SearchResults extends Component {
  // Render the search results JSX based on the following:
  // Image, Title, Authors and Publisher
  render() {
    return (
      <div>
        {// If there are search results go through each of those JSON entries as map
        this.props.items !== undefined &&
          this.props.items.map((item, i) => {
            // Save infoLink
            let infoLink =
              item.volumeInfo !== undefined ? item.volumeInfo.infoLink : "#";

            // Save title
            let title =
              item.volumeInfo !== undefined ? item.volumeInfo.title : "";

            // Save image link
            let imageLinks =
              item.volumeInfo !== undefined
                ? item.volumeInfo.imageLinks
                : undefined;

            // Save authors
            let authors =
              item.volumeInfo !== undefined
                ? item.volumeInfo.authors
                : undefined;

            // Save publishers
            let publisher =
              item.volumeInfo !== undefined ? item.volumeInfo.publisher : "";
            return (
              <a
                className="book"
                href={infoLink}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                title={title}
              >
                <img
                  className="bookImage"
                  src={imageLinks !== undefined ? imageLinks.thumbnail : ""}
                  alt={title}
                  title={title}
                />
                <div className="titleText">
                  Title: {title}
                  <br />
                  Authors: {authors !== undefined ? authors.join(", ") : ""}
                  <br />
                  Publisher: {publisher}
                </div>
              </a>
            );
          })}
      </div>
    );
  }
}

export default SearchResults;
