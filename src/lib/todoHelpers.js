import randomID from 'random-id'
import _ from 'lodash'

export const addTodo = (list, item) => [...list , item]

export const generateId = () => randomID(20,"a")

export const findById = (id,list) => _.find(list, item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isCompleted: !todo.isCompleted}) 

export const updateTodo = (list, updated) => {
	const updatedIndex = list.findIndex(item => item.id === updated.id)

	return [
		...list.slice(0 , updatedIndex),
		updated,
		...list.slice(updatedIndex + 1)
	]
}

export const removeTodo = (list,remove) => {
	
	const removeIndex = list.findIndex(item => item.id === remove.id)

	return [
		...list.slice(0,removeIndex),
		...list.slice(removeIndex+1)
	]
}

export const clearCompleted = (list) =>	_.filter(list, item => item.isCompleted === false)
