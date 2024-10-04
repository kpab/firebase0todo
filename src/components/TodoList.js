import React, { useContext } from "react";
import { Button, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodosContext } from "../contexts/TodosContext";

const { todos, completeTodo, removeTodo } = useContext(TodosContext);

function TodoList() {
  return (
    <Table>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index}>
            <th
              className="text-start"
              style={{
                textDecoration: todo.complete ? "line-through" : "",
              }}
            >
              {todo.text}
            </th>
            <td className="text-end">
              <Button
                color={todo.complete ? "primary" : "success"}
                onClick={() => completeTodo(index)} // Use arrow function here
                className="me-2"
              >
                {todo.complete ? "完了" : "未完了"}
              </Button>
              <Button color="danger" onClick={() => removeTodo(index)}>
                削除
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TodoList;
