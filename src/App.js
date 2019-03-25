// Declare all required imports

// React
import React, { Component } from "react";

import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";

import SearchResults from "./components/SearchResults";

// Custom app css
import "./App.css";

// Google book API url
const GOOGLE_BOOK_URL = "https://www.googleapis.com/books/v1/volumes?q=";

// Declare main App class
class App extends Component {
  // Construct the App class
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
    // Set the query state to the search text box entry
    this.setState({
      query: event.target.value
    });

    // Search for the book
    this.search();
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
        <SearchResults items={this.state.items} />
      </div>
    );
  }
}

// Expose the class
export default App;
