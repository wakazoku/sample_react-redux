import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const list = props.tasks.map((todo) => {
    return <TodoItem {...todo} key={todo.id} />;
  });

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default TodoList;
