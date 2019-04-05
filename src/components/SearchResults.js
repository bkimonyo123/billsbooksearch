import React, { Component } from "react";

// Custom app css
import "../App.css";

// Custom Link component
import Link from "./Link";

// Declare Search Results class
class SearchResults extends Component {
  // Render the search results JSX based on the following:
  // Custom boxed result entry for each book with
  // Image, Title, Authors and Publisher
  render() {
    return (
      <div>
        {// If there are search results go through each of those JSON entries as map
        this.props.items !== undefined &&
          this.props.items.map((item, i) => {
            /**
             * This pattern is repeated several times here for publisher,
             * authors, imageLinks, title, infolink. Can you find a way to
             * eliminate that repetition - perhaps by extracting a function out
             * and reusing it in each case?
             *
             */

            // Initialize variables
            let infoLink = "#";
            let title = "";
            let imageLinks = "";
            let authors = "";
            let publisher = "";

            if (item.volumeInfo !== undefined) {
              // Save infoLink
              infoLink = item.volumeInfo.infoLink;

              // Save title
              title = item.volumeInfo.title;

              // Save image link
              imageLinks =
                item.volumeInfo.imageLinks !== undefined
                  ? item.volumeInfo.imageLinks.thumbnail
                  : "";

              // Save authors
              authors =
                item.volumeInfo.authors !== undefined
                  ? item.volumeInfo.authors.join(", ")
                  : "";

              // Save publisher
              publisher = item.volumeInfo.publisher;
            }

            /**
             * Can you find a way to pull the html out into separate
             * files from the logic?
             *
             * See Link tag below
             */
            return (
              <Link
                key={i}
                title={title}
                infoLink={infoLink}
                imageLink={imageLinks}
                authors={authors}
                publisher={publisher}
              />
            );
          })}
      </div>
    );
  }
}

export default SearchResults;
