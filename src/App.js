import React, { useEffect, useState } from "react";
import Axios from "axios";

import Search from "./components/SearchTrips/Search";
import Trips from "./components/Trips/Trips";
import { SearchTrip } from "./components/APICall/SearchHandler";

const App = () => {

  const [trips, settrips] = useState([]);

  // this will get the lists of all trips and display to users
  useEffect(() => {
    Axios.get("http://localhost:5000/trips")
      .then((res) =>
        res.status === 200
          ? settrips(res.data)
          : console.log(`Somethings wrong, Status Code: ${res.status}`)
      )
      .catch((err) => console.log(err));
  }, []);

  const tripsListUpdater = (searchResult) => {
    settrips(searchResult);
  };

  const searchQueryHandler = (query) => {
    // this function will get the result from the search and pass it to 
    // tripsListUpdater to show result to users
    SearchTrip(query, tripsListUpdater);
  };

  return (
    <div
      style={{
        marginInline: "auto",
        maxWidth: "500px",
        marginTop: "2rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2.5em",
          color: "#2c9cdb",
        }}
      >
        Where we go?
      </h1>
      <Search searchQueryHandler={searchQueryHandler} />
      <Trips trips={trips} searchQueryHandler={searchQueryHandler} />
    </div>
  );
}

export default App;