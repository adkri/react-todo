import React from 'react'
import { partial } from '../../lib/utils'

export const TodoItem = (props) => {
	const handleToggle = partial(props.toggle, props.id)
	return(
		<li>
			<input type="checkbox" 
				onChange={handleToggle} checked={props.isCompleted}/>{props.name}
		</li>
	)
}

TodoItem.propTypes = {
	name: React.PropTypes.string.isRequired,
	isCompleted: React.PropTypes.bool.isRequired,
	id: React.PropTypes.string.isRequired,
	toggle : React.PropTypes.func.isRequired
}