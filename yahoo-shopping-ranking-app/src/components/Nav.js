import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Nav({ categories }) {
  const to = (category) =>
    category.id === 1 ? "/all" : `/category/${category.id}`;

  return (
    <ul>
      {categories.map((category) => (
        <li key={`nav-item-${category.id}`}>
          <Link to={to(category)}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}

Nav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
