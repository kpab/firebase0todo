import React, { useState, useContext } from "react";
import { Button, Form, Input, InputGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodosContext } from "../contexts/TodosContext";

function TodoDorm() {
  const { addTodo } = useContext(TodosContext);
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" color="secondary">
          追加
        </Button>
      </InputGroup>
    </Form>
  );
}

export default TodoDorm;
