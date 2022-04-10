import React from "react";
import Trip from "./Trip";

const Trips = (props) => {
  // this function lift the query props from "Trip.js"
  const queryFromTripHandler = (query) => {
    props.searchQueryHandler(query);
  };
  
  return (
    <div
      style={{
        marginInline: "auto",
        maxWidth: "100%",
      }}
    >
      {props.trips.length > 0 &&
        props.trips.map((trip) => (
          <Trip
            key={trip.eid}
            title={trip.title}
            url={trip.url}
            description={trip.description}
            photos={trip.photos}
            tags={trip.tags}
            queryFromTripHandler={queryFromTripHandler}
          />
        ))}
      {props.trips.length === 0 && (
        <h4 style={{ textAlign: "center" }}>No Trips!</h4>
      )}
    </div>
  );
};

export default Trips;
