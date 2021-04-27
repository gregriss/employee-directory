import React from "react";

const styles = {
  li: {
    listStyle: "none"
  }
}
function EmployeeList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
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