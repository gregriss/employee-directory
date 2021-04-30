import React from "react";
// import EmployeeCard from "../employeeCard";

const listStyles = {
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
  },

}

const spanStyles = {
  // position: 'relative',
  // left: '65%',
  // bottom: '15%',
  color: 'red',
  fontSize: '30px',
  fontWeight: 'bold'
}

function EmployeeList(props) {
  // let employeeArr = [props.results];
  return (
    <ul style={listStyles.ul} className="list-group">
      {props.results.map(result => (
        <li style={listStyles.li} className="list-group-item" key={result.cell}>
          <span style={spanStyles} className="remove" onClick={() => props.handleRemove(result.cell)}>X</span>
          <img alt={result.name.first.last} className="img-fluid" src={result.picture.medium} />
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