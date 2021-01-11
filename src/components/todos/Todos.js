import React from "react";
import AddToDo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";

const Todos = ({ title }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div style={{ borderStyle: "groove", margin: "10px 0" }}>
        <AddToDo />
        <VisibleTodoList />
        <Footer />
      </div>
    </div>
  );
};

export default Todos;
