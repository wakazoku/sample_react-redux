import { createStore } from "redux";

const initialState = {
  task: [],
};

// reducers
function taskReducer(state = initialState, action) {
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

// storeを作成
const store = createStore(taskReducer);

function handleChange() {
  console.log(store.getState());
}

// actionがdispatchされるたびに引数が実行される
const unsubscribe = store.subscribe(handleChange);
// unsubscribe(); // 実行すると解除される

// ActionCreators
const addTask = (task) => ({
  type: "ADD_TASK",
  payload: {
    task,
  },
});

console.log(store.getState());

// dispatchしてみる
store.dispatch(addTask("Storeを学ぶ"));
store.dispatch(addTask("Storeを使ってみる"));

