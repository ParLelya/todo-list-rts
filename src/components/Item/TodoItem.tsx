import React from 'react'
import { ITodo } from '../../types/data'
import classes from './TodoItem.module.css'

interface ITodoItem extends ITodo {
	toggleTodo: (id: number) => void
	removeTodo: (id: number) => void
}

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
				style={{
					background: 'transparent',
					border: '2px solid red',
					borderRadius: '100%',
					outline: 'none',
					padding: '0px',
					margin: '5px',
					height: '20px',
					width: '20px',
					color: 'red',
					fontWeight: '800'
				}}
			>×</button>
		</div>
	)
}

export default TodoItem