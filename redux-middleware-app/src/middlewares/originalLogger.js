const originalLogger = (store) => (next) => (action) => {
  // Action適用前のstateを表示
  console.log("Action適用前のstateを表示");
  console.log(store.getState());

  // どのようなActionが適用されたのかを表示
  console.log("どのようなActionが適用されたのかを表示");
  console.log(action);

  const result = next(action);

  // Action適用後のstateを表示
  console.log("Action適用後のstateを表示");
  console.log(store.getState());
  console.log("--------------------------------------");

  // 特別な値をreturnする必要はないのでresultをそのまま帰す
  return result;
};

export default originalLogger;
