import React from 'react'
import TodoItem from '../Item/TodoItem'
import { ITodoListProps } from "../../types/data"
import classes from './TodoList.module.css' 

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