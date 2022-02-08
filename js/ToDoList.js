class ToDoList {
	constructor() {
		this.list = [];
	}

	addToDo(todo) {
		this.list.push(todo);
	}
	removeToDo(index) {
		this.list.splice(index, 1);
	}

	renderToDo() {
		let content = "";
		content = this.list.reduceRight((content, item, index) => {
			content += `
                <li>
                    <span>${item.textToDo}</span>
                    <div class="buttons">
                        <button class="remove" data-index="${index}" data-status="${item.status}" onclick='removeToDo(event)'>
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete" data-index="${index}" data-status="${item.status}" onclick='completeTodo(event)' >
                            <i class="far fa-check-circle"></i> 
                            <i class="fas fa-check-circle"></i>  
                        </button>
                    </div>
                </li>
            `;
			return content;
		}, "");
		return content;
	}

	sortToDoList(isDes) {
		this.list.sort((toDo, nextToDo) => {
			const toDoA = toDo.textToDo.toLowerCase();
			const toDoB = nextToDo.textToDo.toLowerCase();
			return toDoB.localeCompare(toDoA);
		});
		if (isDes) {
			this.list.reverse();
		}
	}
}
