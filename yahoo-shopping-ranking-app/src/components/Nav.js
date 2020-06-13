import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function Nav({ categories, onClick }) {
  const to = (category) =>
    category.id === 1 ? "/all" : `/category/${category.id}`;

  return (
    <Drawer variant="permanent">
      <List style={{ width: 240 }}>
        {categories.map((category) => (
          <ListItem
            button
            key={`menu-item-${category.id}`}
            onClick={() => onClick(to(category))}
          >
            <ListItemText primary={`${category.name}`} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

Nav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};
