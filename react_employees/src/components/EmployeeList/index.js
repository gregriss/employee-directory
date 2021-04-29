import React from "react";
// import EmployeeCard from "../employeeCard";

const styles = {
  ul: {
    margin: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)",
    gap: "2rem"
  },

  li: {
    listStyle: "none",
    display: "inline",
    padding: "1rem",
    boxShadow: "1px 1px 8px 5px #808080"
  }
}

function EmployeeList(props) {
  // let employeeArr = [props.results];
  return (
    <ul style={styles.ul} className="list-group">
      {props.results.map(result => (

        <li style={styles.li} className="list-group-item" key={result.login.uuid}>
          <img alt={result.name.first.last} className="img-fluid" src={result.picture.thumbnail} />
          <p><strong>Name: </strong> {result.name.first} {result.name.last}</p>
          <p><strong>Cell: </strong> {result.cell}</p>
          <p><strong>Email: </strong> {result.email}</p>
          <p><strong>Nationality: </strong>{result.nat}</p>
          <p><strong>Location: </strong> {result.location.city}, {result.location.country}</p>
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;