import { addTodo, findById, toggleTodo, updateTodo, removeTodo, clearCompleted } from './todoHelpers'

test('add a todo to array',() => {

	var currentTodos = [
		{ id: 1, name: "todo 1", isCompleted: true},
		{ id: 2, name: "todo 2", isCompleted: false}
	]

	var newTodo = { id: 3, name: "todo 3", isCompleted: true}

	var expectedTodos = [
		{ id: 1, name: "todo 1", isCompleted: true},
		{ id: 2, name: "todo 2", isCompleted: false},
		{ id: 3, name: "todo 3", isCompleted: true}
	]

	var result = addTodo(currentTodos, newTodo)

	expect(result).toEqual(expectedTodos)
})

test('find a todo by index',() => {

	var currentTodos = [
		{ id: 1, name: "todo 1", isCompleted: true},
		{ id: 2, name: "todo 2", isCompleted: false},
		{ id: 3, name: "todo 3", isCompleted: true}
	]

	var expectedTodo = { id: 2, name: "todo 2", isCompleted: false}

	var result = findById(2, currentTodos)

	expect(result).toEqual(expectedTodo)
})

test('toggle todo isCompleted',() => {

	var currentTodo={ id: 1, name: "todo 1", isCompleted: true}

	var expectedTodo = { id: 1, name: "todo 1", isCompleted: false}

	var result = toggleTodo(currentTodo)

	expect(result).toEqual(expectedTodo)
})

test('update todo',() => {

	var currentTodos = [
		{ id: 1, name: "todo 1", isCompleted: true},
		{ id: 2, name: "todo 2", isCompleted: true},
		{ id: 3, name: "todo 3", isCompleted: true}
	]

	var updated = { id: 2, name: "todo 2", isCompleted: false}

	var expectedTodos = [
		{ id: 1, name: "todo 1", isCompleted: true},
		{ id: 2, name: "todo 2", isCompleted: false},
		{ id: 3, name: "todo 3", isCompleted: true}
	]

	var result = updateTodo(currentTodos, updated)

	expect(result).toEqual(expectedTodos)
})

test('remove todo',() => {

	var currentTodos = [
		{ id: 1, name: "todo 1", isCompleted: true},
		{ id: 2, name: "todo 2", isCompleted: true},
		{ id: 3, name: "todo 3", isCompleted: true}
	]

	var remove = { id: 2, name: "todo 2", isCompleted: true}

	var expectedTodos = [
		{ id: 1, name: "todo 1", isCompleted: true},
		{ id: 3, name: "todo 3", isCompleted: true}
	]

	var result = removeTodo(currentTodos, remove)

	expect(result).toEqual(expectedTodos)
})

test('clear completed todo',() => {

	var currentTodos = [
		{ id: 1, name: "todo 1", isCompleted: false},
		{ id: 2, name: "todo 2", isCompleted: true},
		{ id: 3, name: "todo 3", isCompleted: false}
	]

	var expectedTodos = [
		{ id: 1, name: "todo 1", isCompleted: false},
		{ id: 3, name: "todo 3", isCompleted: false}
	]

	var result = clearCompleted(currentTodos)

	expect(result).toEqual(expectedTodos)
})