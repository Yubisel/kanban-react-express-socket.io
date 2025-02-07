import { useState } from "react";

import PropTypes from "prop-types";

const AddTask = ({ socket }) => {

  const [task, setTask] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    //👇🏻 sends the task to the Socket.io server
    socket.emit("createTask", { task });
    setTask("");
  };
  return (
    <form className='form__input' onSubmit={handleAddTodo}>
      <label htmlFor='task'>Add Todo</label>
      <input
        type='text'
        name='task'
        id='task'
        value={task}
        className='input'
        required
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='addTodoBtn'>ADD TODO</button>
    </form>
  );
};

AddTask.propTypes = {
  socket: PropTypes.object.isRequired,
};
export default AddTask;
