import { useState, useEffect, useRef } from "react"
import { ITodo } from "../types/data"
import TodoList from "./TodoList";
import Input from "./Input";

const App: React.FC = () => {
	
	const [todos, setTodos] = useState<ITodo[]>([]);

	const removeTodo = (id: number): void => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodo = (id: number): void => {
		setTodos(todos.map(todo => {
			if (todo.id !== id) return todo
			return {
				...todo,
				complete: !todo.complete
			}
		}))
	}

	return (
		<div>
			<Input/>
			<TodoList
				items={todos}
				removeTodo={removeTodo}
				toggleTodo={toggleTodo}
			/>
		</div>
	)
}

export { App }