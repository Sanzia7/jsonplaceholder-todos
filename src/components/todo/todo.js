//import {RiDeleteBin2Line, RiTodoFill} from 'react-icons/ri'
import { RiTodoFill } from 'react-icons/ri'

import styles from './todo.module.css'

export const Todo = ({ todo }) => {
	return (
		<div className={`${styles.todo} ${todo.completed ? styles.completedTodo : ''}`}>
			<RiTodoFill className={styles.todoIcon} />
			<div className={styles.todoText}>{todo.title}</div>
			{/* <RiDeleteBin2Line className={styles.deleteIcon} /> */}
		</div>
	)
}
