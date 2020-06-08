import React, { useState } from "react";
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
  ListItemText,
} from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import "./TodoApp.css";

export default function TodoApp({
  task,
  tasks,
  inputTask,
  addTask,
  redirectToError,
}) {
  const [show, setShow] = useState(false);
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
      <div style={{ padding: "16px" }}>
        <Input type="text" onChange={(e) => inputTask(e.target.value)} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setShow(false);
            setShow(true);
            addTask(task);
            setShow(false);
          }}
        >
          add
        </Button>
        <List>
          {tasks.map((item, i) => {
            return (
              <CSSTransition
                in={show}
                classNames="example"
                timeout={300}
                key={i}
              >
                {(status) => {
                  // exited - initial
                  // --- click
                  // entering
                  // entered
                  // --- click
                  // exiting
                  // exited
                  console.log(status);
                  return (
                    <ListItem button divider>
                      <ListItemText primary={`・${item}`} />
                    </ListItem>
                  );
                }}
              </CSSTransition>
            );
          })}
        </List>
        <button onClick={() => redirectToError()}>エラーページへ</button>
      </div>
    </div>
  );
}
