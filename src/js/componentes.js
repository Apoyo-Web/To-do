//referencias

import {
    Todo
} from '../classes';

import {
    todoList
} from '../index';

const divTodoList = document.querySelector('.todo-list');
const txtInpunt = document.querySelector('.new-todo');


export const crearHtmlTodo = (todo) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked': ''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
    `;

    const div = document.createElement('div');

    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

txtInpunt.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInpunt.value.length > 0) {
        const nuevoTodo = new Todo(txtInpunt.value);
        todoList.nuevoTodo(nuevoTodo);
        crearHtmlTodo(nuevoTodo);
        txtInpunt.value = "";
    };
});


divTodoList.addEventListener('click', (event) => {

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');



    if (nombreElemento.includes('input')) {
        todoList.marcaCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {

        {
            todoList.eliminarTodo(todoId);
            divTodoList.removeChild(todoElemento);
        }
    }




})