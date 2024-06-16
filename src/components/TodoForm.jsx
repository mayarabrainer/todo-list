import {useState} from  "react"
    
    const TodoForm = ({addTodo}) => {
        const [value, setValue] = useState("");
        const [category, setCategory] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!value || !category) return;
            addTodo(value, category);
            setValue("");
            setCategory("");
        };

    return (
     <div className="todo-form">
        <h2>Criar tarefa: </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Digite o título" 
            value={value}
            onChange={(e) => setValue(e.target.value)}/>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option name=" ">Selecione uma categoria</option>
                <option name="Trabalho">Trabalho</option>
                <option name="Pessoal">Pessoal</option>
                <option name="Estudos">Estudos</option>
        </select>
        <button className="CriarTarefa" type="subit">Criar tarefa</button>
        </form>
    </div>
    );
};

    export default TodoForm;