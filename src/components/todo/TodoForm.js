import React from 'react'

export const TodoForm = (props) =>{
	return(
		<div>
			<form onSubmit={props.handleFormSubmit}>
				<input type="text" value={props.currentText} onChange={props.onTextChange} />
			</form>
			<button onClick={props.clear}>Clear</button>
		</div>
	)
}

TodoForm.propTypes = {
	currentText: React.PropTypes.string,
	handleFormSubmit: React.PropTypes.func.isRequired,
	onTextChange: React.PropTypes.func.isRequired,
	clear: React.PropTypes.func.isRequired
}