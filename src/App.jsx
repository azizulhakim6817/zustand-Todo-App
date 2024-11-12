import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import useTodoStore from "./store/TodoStore";

const App = () => {
  const {
    list,
    item,
    setItem,
    addItem,
    removeItem,
    updateItem,
    setEditTodo,
    todoId,
    isEdit,
  } = useTodoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateItem();
    } else {
      addItem();
    }
  };
  return (
    <div className="container mt-5 col-6">
      <h3 className=" text-white fw-bold mb-4">Todo List : </h3>
      <hr className=" text-white " />
      <form onSubmit={handleSubmit} className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setItem(e.target.value)}
          value={item}
          placeholder="Add a new task..."
        />
        <button className="btn btn-primary" type="submit">
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
      <div className="">
        <div>
          
          {list.length !== 0 ? (
            list.map((element, index) => (
              <div
                className=" d-flex justify-content-between align-items-center rounded mb-2 bg-white"
                key={index}
              >
                <p className=" m-0 ps-3">{element.text}</p>
                <div>
                  <div className="d-flex align-items-center ">
                    <button
                      className="btn btn-success d-flex align-items-center me-2"
                      onClick={() => setEditTodo(element.id, element.text)}
                    >
                      Edit <FaEdit className=" ms-1" />
                    </button>
                    <button
                      className="btn btn-danger d-flex align-items-center"
                      onClick={() => removeItem(index)}
                    >
                      Remove <RiDeleteBinLine className=" ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
