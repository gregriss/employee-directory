import React from "react";
// import EmployeeCard from "../employeeCard";

const styles = {
  ul: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)",
    gap: "1rem"
  },

  li: {
    listStyle: "none",
    display: "inline",
    padding: "1rem",
    boxShadow: "1px 1px 8px 5px #EEEEEE"
  }
}

function EmployeeList(props) {
  return (
    <ul style={styles.ul} className="list-group">
      {props.results.map(result => (
        // <EmployeeCard/>
        <li style={styles.li}className="list-group-item" key={result.login.uuid}>
          <img alt={result.name.first.last} className="img-fluid" src={result.picture.thumbnail} />
          <p>{result.name.first} {result.name.last}</p>
          <p>{result.email}</p>
          <p>Location: {result.location.city}, {result.location.country}</p>
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;