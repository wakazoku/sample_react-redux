import PropTypes from "`prop-types";
import React from "react";

export const Hello = (props) => {
  return <div>こんにちは、{props.name}さん</div>;
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

Hello.defaultProps = {
  name: "ユーザー名",
};
