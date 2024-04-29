import { useState, useEffect } from 'react'

export const usePlaceholderGet = () => {
	const [todos, setTodos] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
			.then((todosData) => todosData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos)
			})
			.finally(() => setIsLoading(false))
	}, [])

	return {
		isLoading,
		todos,
	}
}




// https://jsonplaceholder.typicode.com/todos?_limit=12
