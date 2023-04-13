import React from 'react'
import TodoItem from '../Item/TodoItem'
import classes from './TodoList.module.css' 
import { useAppSelector } from '../../redux/hooks/hooks'
import { RootState } from '../../redux/store/store'
import { ITodo } from '../../types/data'

const TodoList: React.FC = () => {

	const {todos} = useAppSelector((state: RootState) => state.todos)

	return (
		<div className={classes.list}>
			{todos.map((todo: ITodo) =>
				<TodoItem
					key={todo.id}
					{...todo}
				/>)}
		</div>
	)
}

export default TodoList