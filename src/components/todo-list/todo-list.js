import { Todo } from '../todo/todo'
import styles from './todo-list.module.css'

export const TodoList = ({ todos }) => {
	return (
		<div className={styles.container}>
			{!todos.length && <h1>Todo list is empty</h1>}
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</div>
	)
}

