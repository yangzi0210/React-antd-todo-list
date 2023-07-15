import "./styles.css";
import { useState } from "react";
import { Checkbox, Input, Row, Col, Space, Button, Tag } from "antd";
const initialValue = [
  {
    text: "玩英雄联盟",
    completed: true
  },
  {
    text: "看前端知识",
    completed: true
  },
  {
    text: "休息一下",
    completed: false
  }
];

export default function App() {
  const [todos, setTodos] = useState(initialValue);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <Space direction="vertical">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleAddTodo}
          placeholder="输入待办事项"
        />
        <Button type="primary" onClick={handleAddTodo}>
          添加
        </Button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{ marginBottom: 15 }}>
              <Space>
                <Checkbox
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(index)}
                />
                {todo.text}
                <Tag color={todo.completed ? "green" : "red"}>
                  {todo.completed ? "已完成" : "   待办"}
                </Tag>
                <Button type="dashed" onClick={() => handleDeleteTodo(index)}>
                  删除
                </Button>
              </Space>
            </li>
          ))}
        </ul>
      </Space>
    </div>
  );
}
