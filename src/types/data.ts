export interface ITodo {
	id: number
	title: string
	complete: boolean
}

export interface ITodoItem extends ITodo {
	toggleTodo: (id: number) => void
	removeTodo: (id: number) => void
}

export interface IInputProps {
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
	todos: ITodo[]
	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

export interface ITodoListProps {
	items: ITodo[]
	toggleTodo: (id: number) => void
	removeTodo: (id: number) => void
}