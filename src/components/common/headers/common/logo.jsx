import React from "react";
import { Link } from "react-router-dom";

function LogoImage(props) {
  return (
    <Link to={`/`} className="custom-logo-link">
      <span className="screen-reader-text">Gening</span>
      <img
        src={`/assets/images/${props.logo}`}
        alt=""
        className="img-fluid col-8 col-md-4 col-lg-8 col-xl-4"
      />
    </Link>
  );
}
export default LogoImage;
