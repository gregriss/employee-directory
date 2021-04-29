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
    this.searchRandomUsers("?results=8"); // "user" before
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
      let userGender = `${user.gender}`;
      let userCell = `${user.cell}`;
      let userEmail = `${user.email}`;
      let userCity = `${user.location.city}`;
      let userCountry = `${user.location.country}`;
      let userLocation = `${user.location.city}, ${user.location.country}`;

      if (firstName === state || lastName === state || fullName === state || userGender === state || userCell === state || userEmail === state || userCity === state || userCountry === state || userLocation === state) {
        // this.setState({ results: results });
        console.log(state);
        return true;
        // return this.user;
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
    // return results;
    return;
  };

  handleSort = (key, asc) => {
    // event.preventDefault();
    // need to COPY the array ..... 'employees' needs to change
    let employeeSorted = [...this.state.results];
    // sort by key, and ascending
    employeeSorted.sort((a, b) => {
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
        <h4>Find an Employee by First Name, Last Name, Full Name, Gender, Cell #, Email, City, Country, or [City, Country]</h4>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <button onClick={() => this.handleSort(`email`, 1)}>Sort by Email</button>
        <button onClick={() => this.handleSort(`email`, -1)}>Sort by Email Reversed</button>
        <button onClick={() => this.handleSort(`nat`, 1)}>Sort by Nationality</button>
        <button onClick={() => this.handleSort(`nat`, -1)}>Sort by Nationality Reversed</button>
        <button onClick={() => this.handleSort(`city`, 1)}>Sort by City</button>

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