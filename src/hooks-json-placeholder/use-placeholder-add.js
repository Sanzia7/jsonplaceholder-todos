import { useState } from 'react'
//import { v4 as uuidv4 } from 'uuid'

export const usePlaceholderAdd = (refreshTodos) => {
	const [isCreating, setIsCreating] = useState(false)

	const requestAddTodo = () => {
		setIsCreating(true)
		fetch('https://jsonplaceholder.typicode.com/todos/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				userId: 1,
				// id: uuidv4(),атоматически генерируется
				title: 'get to know the students in the new study group',
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задание  добавлено, ответ сервера:', response)
				refreshTodos()
			})
			.finally(() => setIsCreating(false))
	}

	return {
		isCreating,
		requestAddTodo,
		//возвращаем конкретно то, что используем в разметке
	}
}
