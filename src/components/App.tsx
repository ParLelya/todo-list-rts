import { useState, useEffect, useRef } from "react"
import { ITodo } from "../types/data"

const App: React.FC = () => {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState<ITodo[]>([]);
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
	//TODO вынести инпут и кнопку в отдельную компоненту
	return <div>
		<div>
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button
				onClick={addTodo}>
				Добавить
			</button>
		</div>
	</div>
}

export { App }