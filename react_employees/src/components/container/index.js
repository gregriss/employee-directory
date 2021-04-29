import React, { Component } from "react";
import EmployeeList from '../employeeList';
// import EmployeeCard from '../employeeCard';
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
    this.searchRandomUsers("?results=32"); // "user" before
  }

  searchRandomUsers = query => {
    api.search(query)
      .then(res => {
        console.log(res.data.results);
        this.setState({ results: res.data.results })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);
    this.setState({
      [name]: value
    });
    // console.log(value);
  };

  handleFormSubmit = event => {
    // console.log(this.state.search);
    event.preventDefault();
    // this.searchRandomUsers(this.state.search);
    // let user = {
    //   firstName: `${user.name.first}`,
    //   lastName: `${user.name.last}`,
    //   fullName: `${user.name.first} ${user.name.last}`,
    //   userCell: `${user.cell}`
    // }
    const results = this.state.results.filter(user => {
      let state = this.state.search;
      let firstName = `${user.name.first}`;
      let lastName = `${user.name.last}`;
      let fullName = `${user.name.first} ${user.name.last}`;
      let userCell = `${user.cell}`;
      // console.log(userCell);
      // console.log(this.state.search);
      // if (fullName === this.state.search || userCell === this.state.search) {
      if (firstName === state || lastName === state || fullName === state || userCell === state) {
        // this.setState({ results: results });
        return true;
        // return this.user;
      }
      // else if (lastName === this.state.search) {
      //   return true;
      //   // alert("Search Result Not found");
      //   // this.setState({ results: this.state.results })
      // }
    })
    this.setState({ results: results })
    // return results;
    return;
  };

  // this was from HW setup, it needs to be tested/refactored
  // handleSort = (key, asc)
  handleSort = (key, asc) => {
    // console.log(key, desc);
    // need to COPY the array ..... 'employees' needs to change
    let employeeSorted = [...this.state.results];

    // console.log(employeeSorted);
    // sort by key, and ascending
    employeeSorted.sort((a, b) => {
      // console.log(a[key] > b[key])
      return a[key] > b[key] ? asc * 1 : asc * -1;
    })
    // set the state
    // these values may need to change
    this.setState({ results: employeeSorted })
    console.log(employeeSorted);
  }

  render() {
    return (
      <div>
        <h2>Employee Search</h2>
        <h4>Search By First Name, Last Name, Full Name, Cell Phone #</h4>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <button onClick={() => this.handleSort("results.gender", -1)}>Sort by First Name</button>
        <button onClick={() => this.handleSort("results.name", -1)}>Sort Reversed by Name</button>

        {/* {this.state.results.map(result => (
          <EmployeeCard
            key={result.uuid}
            picture={result.picture.thumbnail}
            name={result.name.first.last}
            phone={result.cell}
            email={result.email}
          />
        ))} */}

        <EmployeeList
          results={this.state.results}
          handleSort={this.handleSort}
        />
      </div>
    )
  }
}

export default Container;