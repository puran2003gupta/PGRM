import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {this.props.isLoggedIn && (
          <p>
            You are logged in as {this.props.role}
          </p>
        )}
        {!this.props.isLoggedIn && (
          <p>
            You are not logged in. Please <Link to="/login">login</Link>.
          </p>
        )}
        {this.props.isLoggedIn && (
          <ul>
            <li>
              <Link to="/complaints">View your complaints</Link>
            </li>
            {this.props.role === "GRO" && (
              <li>
                <Link to="/complaints/assign">Assign a complaint</Link>
              </li>
            )}
            {this.props.role === "RO" && (
              <li>
                <Link to="/complaints/resolve">Resolve a complaint</Link>
              </li>
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default Dashboard;
