import { useState, useEffect } from 'react';

const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addToDo = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: input, completed: false }]);
        setInput('');
    };

    const deleteToDo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleCompleted = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        <div className='bg-gradient-to-r from-fuchsia-400 to-blue-400'>
            <div className="min-h-screen container mx-auto items-center  overflow-x-auto sm:rounded-lg">
                <h1 className="text-center text-5xl font-semibold pb-6 pt-28">Task</h1>
                <form onSubmit={addToDo} className="flex items-center space-x-4 justify-center pt-5 pb-12">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="border-2 p-2 rounded-md focus:outline-none focus:border-blue-400"
                    />
                    <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500">Add</button>
                </form>
                <div className='flex items-center justify-center'>
                    <table className="w-auto text-sm text-left text-black">
                        <thead>
                            <tr className='items-center justify-center content-center'>
                                <th className=" border-white border-2 px-6 py-3 justify-center items-center">Task</th>
                                <th className=" border-white border-2 px-6 py-3 justify-center items-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                                <tr key={index} className={todo.completed ? 'line-through text-gray-400' : ''}>
                                    <td className="border-white border-2 px-6 py-3">{todo.text}</td>
                                    <td className="border-white border-2 px-6 py-3 space-x-3">
                                        <button onClick={() => toggleCompleted(index)} className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-500">Complete</button>
                                        <button onClick={() => deleteToDo(index)} className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ToDo;