// const newTask = document.getElementById("newTask");
// const addItem = document.getElementById("addItem");
// const todo = document.getElementById("todo");
// const completed = document.getElementById("completed");

const getEle = (id) => {
	return document.getElementById(id);
};

let toDoList = new ToDoList();
let completeList = new ToDoList();

const addToDo = () => {
	let textToDo = getEle("newTask").value;
	let ulToDo = getEle("todo");

	if (textToDo != "") {
		let todo = new ToDo(textToDo, "todo");
		toDoList.addToDo(todo);
	}

	showList(toDoList, ulToDo);

	getEle("newTask").value = "";
};

const showList = (list, ulList) => {
	ulList.innerHTML = list.renderToDo();
};

getEle("addItem").addEventListener("click", () => {
	addToDo();
});

const removeToDo = (e) => {
	let index = e.currentTarget.getAttribute("data-index");
	let status = e.currentTarget.getAttribute("data-status");

	let ulTodo = getEle("todo");
	let ulComplete = getEle("completed");

	if (status === "todo") {
		toDoList.removeToDo(index);
		showList(toDoList, ulTodo);
	} else if (status === "completed") {
		completeList.removeToDo(index);
		showList(completeList, ulComplete);
	} else {
		alert("Cannot delete todo!");
	}
};

const completeTodo = (e) => {
	let index = e.currentTarget.getAttribute("data-index");
	let status = e.currentTarget.getAttribute("data-status");
	let ulTodo = getEle("todo");
	let ulComplete = getEle("completed");

	if (status === "todo") {
		let completeItem = toDoList.list.slice(index, index + 1);
		let objComplete = new ToDo(completeItem[0].textToDo, "completed");
		moveTodo(toDoList, completeList, objComplete, index);

		showList(toDoList, ulTodo);
		showList(completeList, ulComplete);
	} else if (status == "completed") {
		let toDoItem = completeList.list.slice(index, index + 1);
		let objToDo = new ToDo(toDoItem[0].textToDo, "todo");
		moveTodo(completeList, toDoList, objToDo, index);
		showList(toDoList, ulTodo);
		showList(completeList, ulComplete);
	} else {
		alert("Cannot move todo!");
	}
};

const moveTodo = (depart, arrival, obj, index) => {
	depart.removeToDo(index);
	arrival.addToDo(obj);
};

const sortASC = () => {
	let ulToDo = getEle("todo");
	toDoList.sortToDoList(false);
	showList(toDoList, ulToDo);
};

const sortDES = () => {
	let ulToDo = getEle("todo");
	toDoList.sortToDoList(true);
	showList(toDoList, ulToDo);
};
