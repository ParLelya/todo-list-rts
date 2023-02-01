import React from 'react'
import { ITodoItem } from '../../types/data'
import classes from './TodoItem.module.css'

const TodoItem: React.FC<ITodoItem> = (props) => {
	const { id, title, complete, toggleTodo, removeTodo } = props

	return (
		<div className={classes.item}>
			<input
				type='checkbox'
				checked={complete}
				onChange={() => toggleTodo(id)}
			/>
			<span style={{padding: '5px'}}>
				{title}
			</span>
			<button
				onClick={() => removeTodo(id)}
				className={classes.btn}
			>×</button>
		</div>
	)
}

export default TodoItem