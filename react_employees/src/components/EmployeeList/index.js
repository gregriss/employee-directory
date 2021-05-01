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
    padding: "0.5rem 1rem",
    boxShadow: "1px 1px 10px 2px #808080"
  }
}

const imageStyles = {
  display: 'inline',
  marginTop: '-35px'
}

const spanStyles = {
  display: 'grid',
  textAlign: 'right',
  color: '#ea4343',
  fontSize: '36px',
  fontWeight: 'bold',
  cursor: 'pointer'
}

function EmployeeList(props) {
  return (
    <ul style={listStyles.ul} className="list-group">
      {props.results.map(result => (
        <li style={listStyles.li} className="list-group-item" key={result.cell}>
          <span style={spanStyles} className="remove" onClick={() => props.handleRemove(result.cell)}>X</span>
          <img style={imageStyles} alt={result.name.first.last} className="img-fluid" src={result.picture.medium} />
          <p style={{ fontSize: '120%' }}><strong>{result.name.first} {result.name.last}</strong></p>
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