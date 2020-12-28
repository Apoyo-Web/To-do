//referencias

import {
    Todo
} from '../classes';

import {
    todoList
} from '../index';

const divTodoList = document.querySelector('.todo-list');
const txtInpunt = document.querySelector('.new-todo');
const borrarCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


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




});


borrarCompletados.addEventListener('click', () => {

    todoList.eliminarCompletado();



    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) {

            divTodoList.removeChild(elemento);

        }
    }

});

ulFiltros.addEventListener('click', (event) => {

    console.log(event.target);

    const filtro = event.target.text;
    if (!filtro) {
        return;
    }

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');


    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains('completed');

        switch (filtro) {

            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;

        }

    }

});