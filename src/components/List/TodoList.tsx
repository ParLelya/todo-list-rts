import React from 'react'
import TodoItem from '../Item/TodoItem'
import { ITodo } from "../../types/data"
import classes from './TodoList.module.css' 

interface ITodoListProps {
	items: ITodo[]
	toggleTodo: (id: number) => void
	removeTodo: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = (props) => {
	const { items, toggleTodo, removeTodo } = props

	return (
		<div className={classes.list}>
			{items.map(todo =>
				<TodoItem
					key={todo.id}
					{...todo}
					toggleTodo={toggleTodo}
					removeTodo={removeTodo}
				/>)}
		</div>
	)
}

export default TodoList