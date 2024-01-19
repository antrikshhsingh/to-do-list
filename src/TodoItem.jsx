/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return(
        <li>
            <label>
                <input 
                  type="checkbox" 
                  checked={completed} 
                  onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
                onClick={() => deleteTodo(id)}
                className="btn btn-danger"
            >
            <img src = "pngegg.png" alt="Dustbin" width="30" height="30" />
            </button>
        </li>
    )
}
