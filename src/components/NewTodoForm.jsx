const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        type = 'text'
        placeholer='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;