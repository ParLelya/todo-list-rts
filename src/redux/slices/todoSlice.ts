import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../types/data';

export interface ProductsState {
	todos: ITodo[];
}

const initialState: ProductsState = {
	todos: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
		state.todos.push({
			id: Date.now(),
			title: action.payload,
			complete: false,
		})
    },
	removeTodo(state, action: PayloadAction<number>) {
		state.todos = state.todos.filter(todo => todo.id !== action.payload)
	},
	toggleTodo (state, action: PayloadAction<number>) {
		state.todos = state.todos.map(todo => {
			if (todo.id !== action.payload) return todo
			return {
				...todo,
				complete: !todo.complete
			}
		})
	}
  },

})

export const { addTodo, removeTodo, toggleTodo} = todoSlice.actions

export default todoSlice.reducer