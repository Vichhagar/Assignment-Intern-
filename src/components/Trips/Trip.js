import React from "react";
import SmallImages from "./Trip/SmallImages";
import Tags from "./Trip/Tags";
import BigImage from "./Trip/BigImage";
import Description from "./Trip/Description";
import TripTitle from "./Trip/TripTitle";

// for media query
import { StyleRoot } from "radium";

const Trip = (props) => {
  // this function lift the query props from "Tags.js"
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
        <BigImage photos={props.photos} />
        <div
          style={{
            width: "100%",
          }}
        >
          <TripTitle title={props.title} url={props.url} />
          <Description url={props.url} description={props.description} />
          <Tags tags={props.tags} queryFromTagsHandler={queryFromTagsHandler} />
          <SmallImages photos={props.photos.slice(1)} />
        </div>
      </div>
    </StyleRoot>
  );
};

export default Trip;
