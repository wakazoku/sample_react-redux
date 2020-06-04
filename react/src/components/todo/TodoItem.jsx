import React from "react";
import PropTypes from "prop-types";

export const TodoItem = (props) => {
  return <li>{props.title}</li>;
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoItem;
