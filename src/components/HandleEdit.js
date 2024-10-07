import { useState } from "react";


function HandleEdit({ todos, todo, setTodos, setUpdateTodo, index }) {

  const [editedTodo, setEditedTodo] = useState(todo.title);

  const handleUpdate = (e) => {
    e.preventDefault();

     const newtodos = [...todos];
     newtodos[index].title = editedTodo;
     setTodos(newtodos);
     alert(`this tod of name is ${editedTodo} has beeen edited`);
     setUpdateTodo(-1);
  };

  return (
    <>
      <li>
        <div className="update_todo">
          <input
            type="text"
            placeholder="update todo"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      </li>
    </>
  );
}

export default HandleEdit;