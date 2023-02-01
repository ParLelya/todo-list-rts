import React, { useEffect, useRef } from 'react'
import { IInputProps } from '../../types/data'
import classes from './Input.module.css'

const Input: React.FC<IInputProps> = (props) => {
	const { value, setValue, todos, setTodos } = props
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

	return (
		<div className={classes.wrap}>
			<input
				className={classes.input}
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				ref={inputRef}
			/>
			<button className={classes.btn} onClick={addTodo}>
				Добавить
			</button>
		</div>
	)
}

export default Input