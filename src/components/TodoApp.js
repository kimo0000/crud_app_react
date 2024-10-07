import { useState, useRef } from 'react';
import './Todo.css';
import HandleEdit from './HandleEdit';


function TodoApp() {

    const [todos, setTodos] = useState([]);
    const [updateTodo, setUpdateTodo] = useState(-1);
    // console.log(updateTodo);

    const inputRef = useRef();
   

    const handleSubmit = (e) => {
       e.preventDefault();

       if (inputRef.current.value !== "") {
         const title = inputRef.current.value;
         setTodos([...todos, { id: Date.now(), title, completed: false }]);
         inputRef.current.value = "";
       }
    }


    const handleItem = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      
      setTodos(newTodos);
    }
    
    
    const deleteItem = (index) => {
      alert(`are you sure do delete this todo of Name : ${todos[index].title} ?`);
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
    
    
    const clearAll = () => {
     alert("are you sure do delete all todos ?");
     setTodos([]);
   }


    const editTodo = (index) => {
      setUpdateTodo(index);
    }

    


    return (
      <>
        <h3>TODO LIST</h3>
        <form id="formValidation" name="valid_form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add item"
            ref={inputRef}
          />
          <button className="submit">SUBMIT</button>
          <div className="clear">
            <button onClick={() => clearAll()}>Clear All</button>
          </div>
          <ul className="list">
            {
              todos.map((todo, index) => {
                return updateTodo === index 
                  ? <HandleEdit
                      todo={todo}
                      todos={todos}
                      setTodos={setTodos}
                      key={todo.id}
                      setUpdateTodo={setUpdateTodo}
                      index={index}
                      editTodo={editTodo}
                    />
                  :
                   <li key={todo.id}>
                    <div
                      className="title_check"
                      onClick={() => handleItem(index)}
                    >
                      <input
                        type="checkbox"
                        name="checkInput"
                        checked={todo.completed ? true : false}
                      />
                      <div
                        className={todo.completed ? "title throught" : "title"}
                      >
                        {todo.title}
                      </div>
                    </div>
                    <div className="btns">
                      <button onClick={() => deleteItem(index)}>Delete</button>
                      <button onClick={() => editTodo(index)}>
                        Edit
                      </button>
                    </div>
                  </li>
              })
            }
          </ul>
        </form>
      </>
    );
}

export default TodoApp;
