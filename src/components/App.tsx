import { useState } from "react"
import { ITodo } from "../types/data"
import TodoList from "./List/TodoList";
import Input from "./Input/Input";
import '../style.css'

const App: React.FC = () => {
	const [value, setValue] = useState('');
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
			<h1>Список дел:</h1>
			<Input
				value 	 = {value}
				setValue = {setValue}
				todos 	 = {todos}
				setTodos = {setTodos}
			/>
			<TodoList
				items		= {todos}
				removeTodo  = {removeTodo}
				toggleTodo  = {toggleTodo}
			/>
		</div>
	)
}

export { App }