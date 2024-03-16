import { Todo } from '../todo/todo'
import styles from './todo-list.module.css'

export const TodoList = ({todos}) => {
	return (
		<div className={styles.container}>
			{todos.map(({id, title, completed}) => (
				<Todo key={id} title={title} completed={completed} />
			))}
		</div>
	)
}

