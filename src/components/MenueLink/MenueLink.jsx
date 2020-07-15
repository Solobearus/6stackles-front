import React from "react";
import { Link } from "react-router-dom";

export default function MenueLink({ path, title, icon }) {
  const linkIcon = React.lazy(() =>
    import(`@fortawesome/free-solid-svg-icons/${icon}`)
  );
  debugger;
  return (
    <>
      {icon && linkIcon}
      <Link to={path}>{title}</Link>
    </>
  );
}
