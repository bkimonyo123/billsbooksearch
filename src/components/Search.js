// Declare all required imports

// React
import React, { Component } from "react";

// Form controls and glyph icons
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";

// Custom search result component
import SearchResults from "./SearchResults";

// Custom app css
import "../App.css";

// Google book API url
const GOOGLE_BOOK_URL = "https://www.googleapis.com/books/v1/volumes?q=";

// Declare Search class
class Search extends Component {
  // Construct the Search class
  constructor(props) {
    // Call super constructor
    super(props);

    // Set the initial state
    this.state = {
      query: "", // Use for book search query
      items: [] // Use to store book search results
    };

    // Bind the search fucntion to this classes event
    this.search = this.search.bind(this);

    // Bind this classes button click event
    this.handleChange = this.handleChange.bind(this);

    // Bind this classes key press event
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Search for the book
  search() {
    // Construct the book query using the search entry
    let query = GOOGLE_BOOK_URL + this.state.query;

    // Make call to the REST API
    fetch(query, { method: "GET" })
      // COnvert response to JSON
      .then(response => response.json())
      .then(json => {
        // If search result is not empty
        if (json !== undefined) {
          // Save the search result to the state
          this.setState({
            items: json.items
          });
        }
      });
  }

  // Handle any change to the search text box
  handleChange(event) {
    var polishedQueryString = event.target.value.replace(/ /g, "+");
    console.log(polishedQueryString);

    // Set the query state to the search text box entry
    this.setState({
      query: polishedQueryString
    });

    /**
     * it was hard to tell if
     * you were looking at current search results or results
     * from a past search...now It will only search when you hit the search icon
     *
     *
     *
     * It will only search when you hit the search icon
     */
    // Search for the book
    // this.search();
  }

  // Handle key press events
  handleKeyPress(event) {
    // If enter key is pressed
    if (event.key === "Enter") {
      // Search for the book
      this.search();
    }
  }

  // Render the app JSX based on the following:
  // Title for the search
  // Text box to search the google book
  // Search button with appropriate icon
  render() {
    return (
      <div className="App">
        <h1>Bill's Google Book Search</h1>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for book"
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
            <InputGroup.Addon onClick={this.search}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <SearchResults id={this.state.query} items={this.state.items} />
      </div>
    );
  }
}

// Expose the class
export default Search;
