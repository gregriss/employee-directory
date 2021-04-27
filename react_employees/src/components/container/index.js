import React, { Component } from "react";
import API from "../../utils/api";
import "./style.css";

class Container extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the random user API
  componentDidMount() {
    this.searchRandomUser("kittens");
  }

  searchRandomUser = query => {
      API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
          [name]: value
      });
  };

  handleFormSubmit = event => {
      event.preventDefault();
      this.searchRandomUser(this.state.search);
  };

  render() {
      return (
          <div>
              <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                <EmployeeList results={this.state.results} />
          </div>
      )
  }
}
    

export default Container;