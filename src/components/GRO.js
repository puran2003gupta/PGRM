import React, { Component } from "react";
import { Link } from "react-router-dom";

class GRO extends Component {
  state = {
    complaints: [],
  };

  componentDidMount() {
    const request = new Request("/api/complaints", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    });

    fetch(request)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ complaints: data });
      });
  }

  render() {
    const { complaints } = this.state;

    return (
      <div>
        <h1>All Complaints</h1>
        {complaints.map((complaint) => (
          <div key={complaint.id}>
            <h2>{complaint.title}</h2>
            <p>{complaint.description}</p>
            <p>Status: {complaint.status}</p>
            <Link to={`/complaints/${complaint.id}/assign`}>Assign</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default GRO;
