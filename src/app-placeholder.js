import { useState } from 'react'
import { usePlaceholderGet } from './hooks-json-placeholder'

import { TodoList } from './components'
import { sortingTodos } from './utils'
import styles from './app.module.css'

export const App = () => {
	const [isSorted, setIsSorted] = useState(false)

	const { isLoading, todos } = usePlaceholderGet()

	const sortedTodos = isSorted ? sortingTodos(todos) : todos

	return (
		<div className={styles.app}>
			<h1>JSON Placeholder Todo App</h1>

			<button onClick={() => setIsSorted(!isSorted)}>Sorting: A-B</button>

			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<TodoList todos={sortedTodos} />
			)}
		</div>
	)
}
