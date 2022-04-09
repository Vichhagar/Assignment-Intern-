import React from "react";
import Images from "./Trip/Images";
import Tags from "./Trip/Tags";
import MainImage from "./Trip/MainImage";
import Description from "./Trip/Description";
import TripTitle from "./Trip/TripTitle";

// for media query
import { StyleRoot } from "radium";

const Trip = (props) => {
  const queryFromTagsHandler = (query) => {
    props.queryFromTripHandler(query);
  };

  return (
    <StyleRoot>
      <div
        style={{
          display: "flex",
          margin: "3rem 1rem",
          "@media (max-width: 500px)": {
            display: "block",
          },
        }}
        className="trip"
      >
        <MainImage photos={props.photos} />
        <div
          style={{
            width: "100%",
          }}
        >
          <TripTitle title={props.title} url={props.url} />
          <Description url={props.url} description={props.description} />
          <Tags tags={props.tags} queryFromTagsHandler={queryFromTagsHandler} />
          <Images photos={props.photos.slice(1)} />
        </div>
      </div>
    </StyleRoot>
  );
};

export default Trip;
