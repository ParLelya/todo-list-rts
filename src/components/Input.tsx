import React from 'react'
import { useState, useEffect, useRef } from "react"
import { ITodo } from '../types/data';

const Input = () => {
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

	return (
		<div>
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
	)
}

export default Input