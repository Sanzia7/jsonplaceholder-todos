
import {RiTodoFill} from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './todo.module.css'

export const Todo = ({title, completed }) => {
	return (
		<div className={`${styles.todo} ${completed ? styles.completedTodo : ''}`}>
			<RiTodoFill className={styles.todoIcon} />
			<div className={styles.todoText}>{title}</div>

			<FaCheck
				className={styles.checkIcon}
				// onClick={() => toggleTodo(id)}
				onClick={completed}
				readOnly
			/>
		</div>
	)
}


			// <input
			// 	className={styles.checkbox}
			// 	type="checkbox"
			// 	checked={completed}
			// 	readOnly
			// />
