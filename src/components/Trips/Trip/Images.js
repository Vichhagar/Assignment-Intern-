import React from "react";

const Images = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      {props.photos.map((photo) => (
        <img
          key={photo}
          src={photo}
          alt=""
          style={{
            objectFit: "cover",
            width: "auto",
            height: "50px",
            borderRadius: "10%",
            marginRight: "0.50rem",
          }}
        />
      ))}
    </div>
  );
};

export default Images;
