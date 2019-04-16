import React, { Component } from "react";
import House from "../ House/House";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }
  componentDidMount() {
    this.getHouses();
  }
  getHouses() {
    axios
      .get("/api/houses")
      .then(res => {
        console.log("Sack The Castle");
        this.setState({
          houses: res.data
        });
      })
      .catch(err => {
        console.log("Couldn't Sack The Castle");
      });
  }
  deleteHouse(id) {
    console.log("axios ID:", id);
    axios.delete(`/api/houses?id=${id}`).then(res => {
      console.log("The Siege Has Finished");
      this.getHouses();
    });
  }
  render() {
    const { houses } = this.state;
    return (
      <div className="Dashboard">
        <h2 className="title">Dashboard</h2>
        <Link to="/wizard/StepOne">
          <button className="addProperty">Add New Property</button>
        </Link>
        <div className="line" />
        <h3 className="homeListings">Home Listings</h3>
        {houses.map(houses => {
          return (
            <div className="listings">
              <House
                id={houses.house_id}
                name={houses.house_name}
                address={houses.address}
                city={houses.city}
                state={houses.state}
                zipcode={houses.zipcode}
                img={houses.img}
                rent={houses.rent}
                deleteHouseFn={this.deleteHouse}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
