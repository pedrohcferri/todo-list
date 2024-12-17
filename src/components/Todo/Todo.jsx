import React,{useState} from "react";


const Todo = ({todo, removeTodo, completeTodo, editTodo}) => {
  
  
      const [isEditing, setIsEditing] = useState(false);
      const [newText, setNewText] = useState(todo.text);
      const [newCategory, setNewCategory] = useState(todo.category);

      const handleEdit = () => {
        editTodo(todo.id, newText, newCategory);
        setIsEditing(false);
      };




    return(
      <div
      className='todo'
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : '',
        textDecorationColor: todo.isCompleted ? '#FF2F14' : 'inherit',
        textDecorationThickness: todo.isCompleted ? '3px' : 'auto'
      }}
    >
      {isEditing ? (
        <div className="editTask">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className='selecionarTarefa'
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className='selecionarTarefa'
          >
            <option value='Trabalho'>Trabalho</option>
            <option value='Pessoal'>Pessoal</option>
            <option value='Estudos'>Estudos</option>
          </select>
          <button onClick={handleEdit} className='neon'>Salvar</button>
        </div>
      ) : (
        <div className='text'>
          <h3>{todo.text}</h3>
          <h3 className='category'>({todo.category})</h3>
        </div>
      )}
      <div className='alinharbtn'>
        {!isEditing && (
          <button className='neon' onClick={() => setIsEditing(true)}>
            Editar
          </button>
        )}
        <button className='neon' onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className='xneon' onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
    

} 
export default Todo;

{/* <div className='todo' 
style={{textDecoration: todo.isCompleted ? 'line-through': '',
  textDecorationColor: todo.isCompleted ? ' #a00e0e' : 'inherit',
}}>
            <div className='text' >
              <h3 className='a' >{todo.text}</h3>
              <h3 className='category' style={{textDecoration: todo.isCompleted ? 'line-trough': '',
                // textDecorationThickness: todo.isCompleted ? '3px' : 'auto'
              }}>({todo.category})</h3>
            </div>
          <div className='alinharbtn'>
              <button className='neon' onClick={()=> completeTodo(todo.id)}>Completar</button>
              <button className='xneon' onClick={() => removeTodo(todo.id)}>X</button>
          </div>

       </div> */}