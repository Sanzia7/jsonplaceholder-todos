import { useState } from 'react'

export const usePlaceholderDelete = (refreshTodos) => {
	const [isDeleting, setIsDeleting] = useState(false)

	const requestDeleteTodo = () => {
		setIsDeleting(true)

		fetch('https://jsonplaceholder.typicode.com/todos/5', {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача 5 удалена, ответ сервера:', response)
				refreshTodos()
			})
			.finally(() => setIsDeleting(false))
	}

	return {
		isDeleting,
		requestDeleteTodo,
	}
}

// const deleteTodoHandler = ({ id }) => {
// 	setTodos(todos.filter((todo) => todo.id !== id))
// }
