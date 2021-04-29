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
    this.searchRandomUsers("?results=56"); // "user" before
  }

  searchRandomUsers = query => {
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
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log(this.state.search);
    event.preventDefault();
    this.searchRandomUsers(this.state.search);
    const results = this.state.results.filter((user) => {
      let fullName = `${user.name.first} ${user.name.last}`;
      console.log(fullName);
      console.log(this.state.search);
      if (fullName === this.state.search) {
        return true;
      }
    })
  };

  // this was from HW setup, it needs to be tested/refactored
  handleSort = (key, asc) => {
    // need to COPY the array ..... 'employees' needs to change
    let employeeSorted = [...this.state.employees];
    // sort by key, and ascending
    employeeSorted.sort((a, b) => {
      return a[key] > b[key]
    })

    // set the state
    // these values may need to change
    this.setState({ employees: employeeSorted })
  }






  render() {
    return (
      <div>
        <h2>Employee Search</h2>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <button onClick={() => this.handleSort("name", 1)}>Sort by Name</button>
        <button onClick={() => this.handleSort("name", -1)}>Sort Reversed by Name</button>
        <EmployeeList results={this.state.results} />
      </div>
    )
  }
}

export default Container;