import React from 'react';
import './styles.css';
import { Todo } from '../model';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const InputField: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <li key={todo.id}>{todo.todo}</li>
            ))}
        </div>
    );
};

export default InputField;
