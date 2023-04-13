import React from 'react'
import { ITodo } from '../../types/data'
import classes from './TodoItem.module.css'
import { toggleTodo, removeTodo } from '../../redux/slices/todoSlice'
import { useAppDispatch } from '../../redux/hooks/hooks'

const TodoItem: React.FC<ITodo> = (props) => {
	const { id, title, complete } = props
	const dispatch = useAppDispatch()

	return (
		<div className={classes.item}>
			<input
				type='checkbox'
				checked={complete}
				onChange={() => dispatch(toggleTodo(id))}
			/>
			<span style={{ padding: '5px' }}>
				{title}
			</span>
			<button
				onClick={() => dispatch(removeTodo(id))}
				className={classes.btn}
			>×</button>
		</div>
	)
}

export default TodoItem