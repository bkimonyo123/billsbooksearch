// Declare all required imports

// React
import React, { Component } from "react";

// Custom app css
import "./App.css";

// Custom search component
import Search from "./components/Search";

// Declare main App class
class App extends Component {
  // Render the app JSX based on the following:
  // Title for the search
  // Text box to search the google book
  // Search button with appropriate icon
  render() {
    return (
      /**
       * Consider maybe making the search bar its own component
       * as opposed to putting it into your main, App component.
       */
      <Search />
    );
  }
}

// Expose the class
export default App;
