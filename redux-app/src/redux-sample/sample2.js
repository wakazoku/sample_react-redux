import { createStore } from "redux";

const initialState = {
  task: [],
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        task: [...state.task, action.payload.task],
      };
    default:
      return state;
  }
}

function resetReducer(state = initialState, action) {
  switch (action.type) {
    case "RESET_TASK":
      return {
        ...state,
        task: [],
      };
    default:
      return state;
  }
}

const store = createStore(addReducer);

const addTask = (task) => ({
  type: "ADD_TASK",
  payload: {
    task,
  },
});

store.dispatch(addTask("Storeを学ぶ"));
console.log(store.getState());

// reducerを差し替えてみる
store.replaceReducer(resetReducer);
console.log(store.getState());

const resetTask = () => ({
  type: "RESET_TASK",
});

store.dispatch(resetTask());
console.log(store.getState());
