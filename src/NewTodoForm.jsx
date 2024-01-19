/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

export function NewTodoForm({ todos, onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const isDuplicate = newItem !== "" && todos.includes(newItem);

  function handleSubmit(e) {
    e.preventDefault();

    if (isDuplicate) {
      // If the newItem is already present in the todo list, it will do nothing
      return;
    }

    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Task</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button
        className={`btn ${isDuplicate ? "btn-duplicate" : ""}`}
        type="submit"
        disabled={isDuplicate}
      >
        {isDuplicate ? "Already present in the list" : "Add"}
      </button>
    </form>
  );
}

NewTodoForm.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
