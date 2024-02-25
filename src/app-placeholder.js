import { useState } from 'react'
import {
	usePlaceholderGet,
	usePlaceholderAdd,
	usePlaceholderDelete,
	usePlaceholderUpdate,
} from './hooks-json-placeholder'

import {TodoList} from './components'
import {sortingTodos} from './utils'
import styles from './app.module.css'

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)
	const [isSorted, setIsSorted] = useState(false)

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag)

	const {isLoading, todos} = usePlaceholderGet(refreshTodosFlag)

	const sortedTodos = isSorted ? sortingTodos(todos) : todos

	const { isCreating, requestAddTodo } = usePlaceholderAdd(refreshTodos)

	const { isDeleting, requestDeleteTodo } = usePlaceholderDelete(refreshTodos)

	const { isUpdating, requestUpdateTodos } = usePlaceholderUpdate(refreshTodos)

	return (
		<div className={styles.app}>
			<h1>JSON Placeholder Todo App</h1>

			<button onClick={() => setIsSorted(!isSorted)}>Sorting: A-B</button>

			<button disabled={isCreating} onClick={requestAddTodo}>
				Add new Todo
			</button>
			<button disabled={isDeleting} onClick={requestDeleteTodo}>
				Remove
			</button>
			<button disabled={isUpdating} onClick={requestUpdateTodos}>
				Update Todos
			</button>

			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<TodoList todos={sortedTodos} />
			)}
		</div>
	)
}





