import React, { Component } from "react";
import EmployeeList from '../employeeList';
import SearchForm from '../searchForm';
import api from "../../utils/api";
import "./style.css";

class Container extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the random user API
  componentDidMount() {
    this.searchRandomUser("?results=12"); // "user" before
  }

  searchRandomUser = query => {
      api.search(query)
      .then(res => {
          console.log(res.data.results);
          this.setState({ results: res.data.results }) // was results: res.data.data
      })
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
              <h1>Employee Search</h1>
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