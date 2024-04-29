import { useEffect, useState } from 'react'
//import { usePlaceholderGet } from './hooks-json-placeholder'
import { sortingTodos } from './utils'
import { TodoList } from './components'
import styles from './app.module.css'

export const App = () => {
	const [todos, setTodos] = useState([])
	const [isSorted, setIsSorted] = useState(false)
	//const { isLoading, todos } = usePlaceholderGet()

		useEffect(() => {
		//setIsLoading(true)
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
			// .then((todosData) => todosData.json())
			.then(todosData => {
				if (!todosData.ok) {
					throw new Error('Network response was not ok');
				}
				return todosData.json();
				})
			.then((loadedTodos) => setTodos(loadedTodos))
			.catch(error => {
				// Handle errors
				console.error('There was a problem with the fetch operation:', error);
				})
			//.finally(() => setIsLoading(false))
		}, [])

	const sortedTodos = isSorted ? sortingTodos(todos) : todos

	return (
		<div className={styles.app}>
			<h1>JSON Placeholder Todo App</h1>

			<button onClick={() => setIsSorted(!isSorted)}>Sorting: A-B</button>

			<TodoList todos={sortedTodos} />
		</div>
	)
}
//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Do something with the data
//       console.log(data);
//     })
//     .catch(error => {
//       // Handle errors
//       console.error('There was a problem with the fetch operation:', error);
//     });

    // {isLoading ? (
	// 			<div className={styles.loader}></div>
	// 		) : (
	// 			<TodoList todos={sortedTodos} />
	// 		)}
