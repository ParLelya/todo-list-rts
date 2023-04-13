import React, { useEffect, useRef, useState } from 'react'
import classes from './Input.module.css'
import { useAppDispatch } from '../../redux/hooks/hooks';
import { addTodo } from '../../redux/slices/todoSlice';

const Input: React.FC = () => {
	const dispatch = useAppDispatch()
	const [value, setValue] = useState('');

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}

	const addTodoItem = () => {
		if (value) {
			dispatch(addTodo(value))
			setValue('')
		}
	};

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (value && e.key === 'Enter') dispatch(addTodo(value))
	}

	return (
		<div className={classes.wrap}>
			<input
				className={classes.input}
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				ref={inputRef}
			/>
			<button className={classes.btn} onClick={addTodoItem}>
				Добавить
			</button>
		</div>
	)
}

export default Input