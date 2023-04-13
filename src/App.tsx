import React from 'react'
import TodoList from "./components/List/TodoList";
import Input from "./components/Input/Input";
import './styles/style.css'

const App: React.FC = () => {

	return (
		<div>
			<h1>Список дел:</h1>
			<Input/>
			<TodoList/>
		</div>
	)
}

export { App }