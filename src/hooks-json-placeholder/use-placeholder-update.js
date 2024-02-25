import { useState } from 'react'

export const usePlaceholderUpdate = (refreshProducts) => {
	const [isUpdating, setIsUpdating] = useState(false)

	const requestUpdateTodos = () => {
		setIsUpdating(true)

		fetch('http://localhost:3007/todos/3', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				userId: 1,
				// id: 2,/автоматическая генерация id
				title: 'start learning TypeScript',
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('задача с id:3 обновлена, ответ сервера:', response)
				refreshProducts()
			})
			.finally(() => setIsUpdating(false))
	}

	return {
		isUpdating,
		requestUpdateTodos,
	}
}



