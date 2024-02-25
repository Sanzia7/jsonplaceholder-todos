import { useState, useEffect } from 'react'

export const usePlaceholderGet = (refreshTodosFlag) => {
	const [todos, setTodos] = useState([])

	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos)
			})
			.finally(() => setIsLoading(false))
	}, [refreshTodosFlag])

	return {
		isLoading,
		todos,
	}
}



// https://jsonplaceholder.typicode.com/todos?_limit=12
