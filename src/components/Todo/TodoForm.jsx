import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category)
        setValue("")
        setCategory("")
    
    }

    return (
        <div className='todo-form'>
            <h3 className='criarTarefaa'>Criar tarefa:</h3>
            <form  onSubmit={handleSubmit} className='form'>
                <input type='text' 
                placeholder='Digite o título' 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className='tituloTarefa'
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)} className='selecionarTarefa'>
                    <option value='' >Selecione uma categoria</option>
                    <option value='Trabalho'>Trabalho</option>
                    <option value='Pessoal'>Pessoal</option>
                    <option value='Estudos'>Estudos</option>
                </select>
                <button type='submit' className='neon'>Criar</button>
            </form>

        </div>
    )
}

export default TodoForm