import React from "react";
import "fontsource-roboto";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Input,
  Button,
  List,
  ListItem,
} from "@material-ui/core";

export default function TodoApp({
  task,
  tasks,
  inputTask,
  addTask,
  redirectToError,
}) {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="">
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Input type="text" onChange={(e) => inputTask(e.target.value)} />
      <Button variant="contained" color="primary" onClick={() => addTask(task)}>
        add
      </Button>
      <List>
        {tasks.map((item, i) => {
          return (
            <ListItem button divider key={i}>
              {item}
            </ListItem>
          );
        })}
      </List>
      <button onClick={() => redirectToError()}>エラーページへ</button>
    </div>
  );
}
