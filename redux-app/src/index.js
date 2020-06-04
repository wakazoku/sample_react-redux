import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";

const initialState = {
  task: "",
  tasks: [],
};

// reducers
function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "INPUT_TASK":
      return {
        ...state,
        task: action.payload.task,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };
    default:
      return state;
  }
}

// storeを作成
const store = createStore(taskReducer);

// ActionCreators
const inputTask = (task) => ({
  type: "INPUT_TASK",
  payload: {
    task,
  },
});

const addTask = (task) => ({
  type: "ADD_TASK",
  payload: {
    task,
  },
});

function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => store.dispatch(inputTask(e.target.value))}
      />
      <input
        type="button"
        value="add"
        onClick={() => store.dispatch(addTask(task))}
      />
      <ul>
        {tasks.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

function renderApp(store) {
  console.log(store.getState());
  render(<TodoApp store={store} />, document.getElementById("root"));
}

store.subscribe(() => renderApp(store));
renderApp(store);

export default TodoApp;
