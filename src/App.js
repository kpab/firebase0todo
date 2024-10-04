import React, { useState } from "react";
import { Container } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoDorm from "./components/TodoDorm";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./contexts/TodosContext";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">ToDo App</h1>
        <TodosContextProvider>
          <TodoDorm />
          <TodoList />
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
