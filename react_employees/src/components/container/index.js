import React, { Component } from "react";
import EmployeeList from '../employeeList';
// import EmployeeCard from '../employeeCard';
// import Sort from '../sortParams';
import SearchForm from '../searchForm';
import randomUsers from "../../utils/api";
import "./style.css";

class Container extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the random user API
  componentDidMount() {
    this.searchRandomUsers("?results=24");
  }

  searchRandomUsers = query => {
    randomUsers.search(query)
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

  handleHover = key => {
    // console.log(key);
    if (this.state.results.phone === key.value) {
      document.getElementById(key).setAttribute('visibility', 'visible')
      // alert(key)
    }
  }

  // function to remove an individual employee
  handleRemove = id => {
    this.setState({
      results: this.state.results.filter(result => result.cell !== id)
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let state = this.state.search;
    // was let user
    // let result = {
    //   firstName: `${user.name.first}`,
    //   lastName: `${user.name.last}`,
    //   fullName: `${user.name.first} ${user.name.last}`,
    //   userCell: `${user.cell}`,
    //   userEmail: `${result.email}`,
    //   userCity: `${result.location.city}`,
    //   userCountry: `${result.location.country}`
    // }

    // filter employees to match parameter of the search term
    const results = this.state.results.filter(user => {
      let firstName = `${user.name.first}`;
      let lastName = `${user.name.last}`;
      let fullName = `${user.name.first} ${user.name.last}`;
      let userGender = `${user.gender}`;
      let userCell = `${user.cell}`;
      let userEmail = `${user.email}`;
      let userCity = `${user.location.city}`;
      let userCountry = `${user.location.country}`;
      let userLocation = `${user.location.city}, ${user.location.country}`;

      if (firstName === state || lastName === state || fullName === state || userGender === state || userCell === state || userEmail === state || userCity === state || userCountry === state || userLocation === state) {
        console.log(state);
        return true;
      }
      else if (this.state.results.includes(this.state.search)) {
        console.log(results)
        return true;
      }
      // else {
      //   alert('Not found');
      //   return;
      // }
    })
    this.setState({ results: results })
    return;
  };
  // function to sort 1 level down the DOM tree
  handleSort1Level = (key, asc) => {
    // Copy the array into new array
    let employeeSorted = [...this.state.results];
    // sort by key, and ascending
    employeeSorted.sort((a, b) => {
      return a[key] > b[key] ? asc * 1 : asc * -1;
    })
    // set the state
    this.setState({ results: employeeSorted })
    console.log(employeeSorted);
  }

  // function to sort 2 levels down the DOM tree
  handleSort2Levels = (key1, key2, asc) => {
    // Copy the array to a new array
    let employeeSorted = [...this.state.results];
    // sort by key, and ascending
    employeeSorted.sort((a, b) => {
      return a[key1][key2] > b[key1][key2] ? asc * 1 : asc * -1;
    })
    // set the state
    this.setState({ results: employeeSorted })
    console.log(employeeSorted);
  }

  render() {
    return (
      <div className="search-div">
        <h2>Search</h2>
        <h3>Filter/Find an Employee by their First Name, Last Name, Full Name, gender (male or female), Cell #, Email, City, Country, or [City, Country]</h3>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <section className="buttons-container">
          <h3>Or Sort Alphabetically By:</h3>
          <button onClick={() => this.handleSort2Levels('name', 'first', 1)}>First Name</button>
          <button onClick={() => this.handleSort2Levels('name', 'last', 1)}>Last Name</button>
          <button onClick={() => this.handleSort1Level('email', 1)}>Email</button>
          <button onClick={() => this.handleSort1Level('email', -1)}>Email Reversed</button>
          <button onClick={() => this.handleSort1Level('nat', 1)}>Nationality</button>
          <button onClick={() => this.handleSort1Level('nat', -1)}>Nationality Reversed</button>
          <button onClick={() => this.handleSort2Levels('location', 'city', 1)}>City</button>
        </section>
        <EmployeeList
          results={this.state.results}
          handleSort={this.handleSort}
          handleHover={this.handleHover}
          handleRemove={this.handleRemove}
        />
      </div>
    )
  }
}

export default Container;