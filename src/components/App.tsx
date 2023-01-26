import { useState, useEffect, useRef } from "react"
import { ITodo } from "../types/data"
import TodoList from "./List/TodoList";
import '../style.css'

const App: React.FC = () => {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState<ITodo[]>([]);

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	const addTodo = () => {
		if (value) {
			setTodos([...todos, {
				id: Date.now(),
				title: value,
				complete: false,
			}])
			setValue('')
		}
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') addTodo()
	}

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
			<div className="input">
				<input
					value={value}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					ref={inputRef}
				/>
				<button onClick={addTodo}>
					Добавить
				</button>
			</div>
			<TodoList
				items={todos}
				removeTodo={removeTodo}
				toggleTodo={toggleTodo}
			/>
		</div>
	)
}

export { App }